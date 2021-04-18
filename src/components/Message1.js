import React from 'react'
import axios from 'axios'



axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


class Message1 extends React.Component{
    state={
        chat:[],
        message:""
    }

    handleInput=(e)=>{
        console.log(e.target.value)
        this.setState({message:e.target.value})
        
    }
    handleSend=()=>{
        if(this.state.message!==""){
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
                        value={this.state.message}/>
                        <button onClick={()=>this.handleSend()} className="btnsend">
                            O
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message1;