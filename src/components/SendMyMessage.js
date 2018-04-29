import React, { Component } from 'react'
import '../App.css'

class SendMyMessage extends Component{
    render(){
        return (
        <div className="login text-left">
            <div className="form-group text-left">
                <label className="control-label col-sm-2 col-xs-12 text-right" for="myMessage">Alert Message</label>
                <div className="col-sm-10 col-xs-12">
                 <input type="text" className="form-control" id="myMessage"/>
                 <span class="help-block">This message will be sent as notification to all the users in your area</span>
                </div>
                   
            </div>
            <div className="form-group text-left">
                 <div className="col-sm-2 col-xs-12"></div>    
                 <div className="col-sm-10 col-xs-12">          
                 <button type="submit" class="btn btn-warning">Alert All</button>  
                 </div>             
            </div>                  
        </div>
        );
    }
  
}

export default SendMyMessage