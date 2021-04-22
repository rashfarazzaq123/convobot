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

class Message2 extends React.Component{
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
                console.log("Stop listening")
            }
        }
        recognition.onstart=()=>{
            console.log("Listening...")
        }
        
        recognition.onresult=event=>{
            let interimTranscript=''
            for(let i=event.resultIndex; i<event.results.length;i++){
                const transcript=event.results[i][0].transcript;
                if(event.results[i].isFinal)this.state.finalTranscript+=transcript+'';
                else interimTranscript+=transcript;   
               
            }
            
        }
        recognition.onerror=event=>{
            console.log("Error recognizing:"+event.error)
        }
    }

    handleInput=(e)=>{
        console.log(e.target.value)
        this.setState({message:e.target.value})
        
    }
    handleSend=()=>{
        if(this.state.finalTranscript!==""){
            axios.post('/api/message2',{'message':this.state.finalTranscript})
            .then(res=>{
                let reply=this.state.chat;
                reply.push({from:'you',reply:this.state.finalTranscript});
                reply.push({from:'convo',reply:res.data});
                this.setState({chat:reply,message:'',finalTranscript:''});
                let utterance=new SpeechSynthesisUtterance(res.data);
                speechSynthesis.speak(utterance);
                console.log(this.state);
            })
            .catch(err=>{
                console.log(err)
            })
        }
        else if(this.state.message!==""){
            axios.post('/api/message2',{'message':this.state.message})
            .then(res=>{
                let reply=this.state.chat;
                reply.push({from:'you',reply:this.state.message});
                reply.push({from:'convo',reply:res.data});
                this.setState({chat:reply,message:''});
                let utterance=new SpeechSynthesisUtterance(res.data);
                speechSynthesis.speak(utterance);
                console.log(this.state);
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    delete(){
        let reply=this.state.chat;
        this.setState({chat:reply,message:''});
        this.setState({chat:reply,message:'',finalTranscript:''});
    }
    render(){
        return(
            <div className="Message"> 
            <h1 style={{fontSize:"30px",position:"absolute",top:"150%",left:"10%",color:"#4287f5"}}>Instructions</h1>
            <h2 style={{fontSize:"20px",position:"absolute",top:"183%",left:"10%",color:"#64799c"}}>Click on the microphone button and wait for the red dot to stop blinking at the top of the page tab.</h2>
            <h3 style={{fontSize:"20px",position:"absolute",top:"161%",left:"10%",color:"#64799c"}}>Speak to the microphone and click the microphone button again to stop listening.</h3> 
            <h4 style={{fontSize:"20px",position:"absolute",top:"169%",left:"10%",color:"#64799c"}}>Press the send button after the required input is obtained in the input box.</h4> 
            <h5 style={{fontSize:"20px",position:"absolute",top:"175%",left:"10%",color:"#64799c"}}>If not click the bin icon to delete the input. You can also enter your inputs through the keyboard.</h5> 
            <h6 style={{fontSize:"20px",position:"absolute",top:"180%",left:"10%",color:"#64799c"}}>If your voice input is not shown in the input box double click the microphone button.</h6> 
                <div className="wrapper" style={{backgroundImage:'url(/college.jpg)'}}>
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
                    <button id="micbtn" style={{backgroundImage:'url(/mic.png)',borderRadius:'100%',width:"30px",height:"30px",backgroundSize:'cover',backgroundPosition:'center',margin:'5px'}} onClick={this.toggleListen}/>
                        <input type="text" id="myText" name="message" placeholder="Say something" style={{width:"300px",position:"absolute",top:"89%",left:"13%"}}
                        onChange={(e)=>this.handleInput(e)}
                        className="form-control"
                        value={this.state.finalTranscript||this.state.message}/>  
                        <button style={{backgroundImage:'url(/send.png)',borderRadius:'100%',width:"33px",height:"33px",backgroundSize:'cover',backgroundPosition:'center',margin:'5px',position:"absolute",top:"88.5%",left:"54%"}}  onClick={()=>this.handleSend()} className="btnsend"></button>  
                        <button id="delbtn"style={{backgroundImage:'url(/delete.png)',width:"33px",height:"33px",backgroundSize:'cover',backgroundPosition:'center',margin:'5px',borderRadius:"16px"}} onClick={()=>this.delete()}></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message2;