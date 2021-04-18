import React from 'react';


class SubmitBtn extends React.Component{
    
    render(){
        return (
            <div className="loginBtn">
                <button
                    className='submitbtn'
                    disabled={this.props.disabled}
                    onClick={()=>this.props.onClick()}
                >
                    {this.props.text}
                </button>
                
            </div>
        );
    
    }
}
export default SubmitBtn;