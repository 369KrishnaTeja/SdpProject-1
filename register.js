import React,{Component} from 'react';
import './Register1.css';
export default class register extends React.Component
{
    constructor()
    {
        super()
        this.state={
            "Name":"",
            "Email":"",
            "DOB":"",
            "PhoneNo":"",
            "CreatePassword":"",
            "ConfirmPassword":"",
        }
    }
    displayvaluesx=()=>
    {
        var password;
        var user = {
            Name:this.state.Name,
            Email:this.state.Email,
            Password:this.state.ConfirmPassword,
            DOB:this.state.DOB,
            PhoneNo:this.state.PhoneNo
        }
        if(this.state.CreatePassword==this.state.ConfirmPassword)
        {
            password=this.state.ConfirmPassword;
        }
        else
        {
            window.alert("Create Password and Confirm Password should be same");
        }
        //document.writeln(password);
        //document.writeln(user);
    }
    render()
    {
    return <div className="XCV">
    <text style={{fontFamily:'fantasy',fontSize:'30px'}}>"You are registering to one of the finest Apps till now"</text>
        <div className="XCVV">
        <form onSubmit={this.displayvaluesx}>
         Enter UserName:<input type="text" placeholder="Enter UserName" value={this.state.Name} required onChange={ (e) => {this.setState({Name:e.target.value})}}/><br/><br/>
         Enter Email:<input type="email" placeholder="Enter email" value={this.state.Email} required onChange={ (e) => {this.setState({Email:e.target.value})}}/><br/><br/>
         Enter DOB:<input type="date" value={this.state.DOB} required onChange={ (e) => {this.setState({DOB:e.target.value})}}/><br/><br/>
         Enter Phone.No:<input type="number" placeholder="Enter Phone.No" value={this.state.PhoneNo} required onChange={ (e) => {this.setState({PhoneNo:e.target.value})}}/><br/><br/>
         Enter Password:<input type="text" placeholder="Eg: kdjs@371" value={this.state.CreatePassword} required onChange={ (e) => {this.setState({CreatePassword:e.target.value})}}/><br/><br/>
         Confirm Password:<input type="text" placeholder="Renter Password" value={this.state.ConfirmPassword} required onChange={ (e) => {this.setState({ConfirmPassword:e.target.value})}}/><br/><br/>
         <input type="submit" value="Register"/><text>           </text>
         <input type="reset" value="Clear"/>
         </form>
         </div>
    </div>
    }
}
