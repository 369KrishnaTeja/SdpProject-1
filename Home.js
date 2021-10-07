import React,{Component} from 'react';
import './Home2.css';
class Home extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
    return <div className="Home">
        <div className="searchBox">
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" style={{fontFamily:'fantasy',fontSize:'20px'}}>Search for Diseases : </span>
        </label>
        <input style={{fontSize:'15px'}}
            type="text"
            id="header-search"
            placeholder="Enter a disease name"
            name="s" 
        /><text>    </text>
        <button type="submit" style={{fontFamily:'fantasy',fontSize:'15px'}}>Search</button>
    </form>
        </div>
        <br/>
        <div style={{textAlign:'center',backgroundColor:'seagreen',borderStyle:'groove'}}>
            <button style={{fontFamily:'fantasy',fontSize:'20px'}}>AboutUs</button><text>    </text>
            <button style={{fontFamily:'fantasy',fontSize:'20px'}}>Help</button><text>    </text>
        </div>
    </div>
    }
}
export default Home
