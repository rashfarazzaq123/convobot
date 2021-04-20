import React from 'react'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const SpeechRecognition =window.webkitSpeechRecognition || window.SpeechRecognition
const recognition=new SpeechRecognition()

recognition.continous=true
recognition.interimResults=true
recognition.lang='en-US'

class Message1 extends React.Component{
    constructor(){
        super()
        this.state={
            chat:[],
            finalTranscript:"",
            message:"",
            listening:false
        }
        this.toggleListen=this.toggleListen.bind(this)
        this.handleListen=this.handleListen.bind(this)
    }
    toggleListen(){
        this.setState({
            listening:!this.state.listening
        },this.handleListen)
    }
    handleListen(){
        console.log('listening?', this.state.listening)
        if(this.state.listening){
            recognition.start()
            recognition.onend=()=>{
                console.log("..continue listening..")
                recognition.start()
            }
        }
        else{
            recognition.stop()
            recognition.onend=()=>{
                console.log("stop listening")
            }
        }
        recognition.onstart=()=>{
            console.log("Listening")
        }
        
        recognition.onresult=event=>{
            let interimTranscript=''
            for(let i=event.resultIndex; i<event.results.length;i++){
                const transcript=event.results[i][0].transcript;
                if(event.results[i].isFinal)this.state.finalTranscript+=transcript+'';
                else interimTranscript+=transcript;    
            }
            
            const transcriptArr=this.state.finalTranscript.split('')
            const stopCmd=transcriptArr.slice(-3,-1)
            console.log('stopCmd')

            if(stopCmd[0]=='stop' && stopCmd[1]=='listening'){
                recognition.stop()
                recognition.onend=()=>{
                    console.log("Stopped per command")
                    const finalText=transcriptArr.slice(0,-3).join('')
                    document.getElementById('final').innerHTML=finalText
                }
            }
        }
        recognition.onerror=event=>{
            console.log("Error recognozing:"+event.error)
        }
    }

    handleInput=(e)=>{
        console.log(e.target.value)
        this.setState({message:e.target.value})
        
    }
    handleSend=()=>{
        if(this.state.finalTranscript!==""){
            axios.post('/api/message1',{'message':this.state.finalTranscript})
            .then(res=>{
                let reply=this.state.chat;
                reply.push({from:'you',reply:this.state.finalTranscript});
                reply.push({from:'convo',reply:res.data});
                this.setState({chat:reply,message:'',finalTranscript:''});
                console.log(this.state);
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else if(this.state.message!==""){
            axios.post('/api/message1',{'message':this.state.message})
            .then(res=>{
                let reply=this.state.chat;
                reply.push({from:'you',reply:this.state.message});
                reply.push({from:'convo',reply:res.data});
                this.setState({chat:reply,message:''});
                console.log(this.state);
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    render(){
        return(
            <div className="Message"> 
                <div className="wrapper" style={{backgroundImage:'url(/cafe.jpg)'}}>
                    <div className="conversation">
                    <div>{
                        this.state.chat.map((message)=>{
                            if(message.from=='convo'){
                                return <div id="convo_reply" style={{float:'right',marginTop:'4%',marginLeft:'20%',display:'block',fontSize:'14px',backgroundColor:'#79acce',padding:'10px',borderRadius:'10%'}}>{message.reply}<br/></div>
                            }
                            else{
                                return <div style={{float:'left',marginBottom:'4%',marginRight:'20%',display:'block',fontSize:'14px',backgroundColor:'#00c0b6',padding:'10px',borderRadius:'10%'}}>{message.reply}<br/></div>
                            }
                        })   
                    }
                    </div>
                    </div>
                    <div className="textarea">
                        <input type="text" id="myText" name="message" placeholder="Say something"
                        onChange={(e)=>this.handleInput(e)}
                        className="form-control"
                        width='500px'
                        value={this.state.finalTranscript||this.state.message}/>
                        
                        <button onClick={()=>this.handleSend()} className="btnsend">
                            Enter
                        </button>
                        <button style={{padding:'2%'}} onClick={this.toggleListen}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message1;