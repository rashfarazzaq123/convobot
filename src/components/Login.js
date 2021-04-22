import React from 'react';
import InputField from './InputField';
import SubmitBtn from './SubmitBtn';
import Users from '../store/Users';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            buttonDisabled:false,
        }
    }
    
    setInputValue(property,val){
        val=val.trim();
        if(val.length>15){
            return;
        }
        this.setState({
            [property]:val
        })
    }
    resetLogin(){
        this.setState({
           username:'',
           password:'',
           buttonDisabled:false 
        })
    }
    async doLogin(){
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled:true
        })
        try{
            let res=await fetch('/login',{
                method:'post',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username:this.state.username,
                    password:this.state.password
                })
            });
            let result=await res.json();
            if(result && result.success){
                Users.isLoggedIn=true;
                Users.username=result.username;
                
            }
            else if(result && result.success===false){
                this.resetLogin();
                alert(result.msg);
            }
        }
        catch(e){
            console.log(e);
            this.resetLogin();
        }
    }
    render(){
        return (
            <div className="login">
                <div style={{float:'left', marginTop:'5%',marginLeft:'6%'}}> <img src="convologo.png"  width="320" height="320" alt=""></img>
                <p>Learn and improve your English with Convo!</p>
                </div>
                <div className="loginInput">
                <h3>LOGIN</h3>
                <p>Please fill in your credentials to login.</p><br/>
                <label >Username</label>
                <InputField
                    type='text' placeholder='Username'
                    value={this.state.username? this.state.username:''}
                    onChange={(val)=>this.setInputValue('username',val)}
                /><br/>
                <label>Password</label>
                <InputField
                    type='password' placeholder='Password'
                    value={this.state.password? this.state.password:''}
                    onChange={(val)=>this.setInputValue('password',val)}
                /><br/>
                <SubmitBtn
                    text='Login'
                    disabled={this.state.buttonDisabled}
                    onClick={()=>this.doLogin()}
                />
                <div>
                    <p>Don't have an account? <a href="register.php" style={{color:"white"}}>Sign up now</a>.</p>
                </div>
                </div>
            </div> 
            
        );
    }
}

export default Login;