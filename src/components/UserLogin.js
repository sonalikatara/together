import React, { Component } from 'react'
import '../App.css'

class UserLogin extends Component{
    render(){
        return (
        <div className="login">
            <div className="form-group">
                <label className="control-label col-sm-2" for="email">Email:</label>
                <div className="col-sm-10">
                 <input type="text" className="form-control" id="usr"/>
                </div>
            </div> <br/>
            <div className="form-group">
                 <label className="control-label col-sm-2" for="pwd">Password:</label>
                 <div className="col-sm-10">          
                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                 </div>
            </div>  <br/>
            <div className="form-group">
                <div className="col-sm-12">    
                  <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </div>                
        </div>
        );
    }
  
}

export default UserLogin