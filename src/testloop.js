import React, { Component } from 'react'

export default class testloop extends Component {
    state = {
    
        name :[]
       };

componentDidMount(){
    let tab=[];
    for(var i=0 ; i< 5;i++){
        console.log(i);
       tab.push("hello")
            
             
        }
        this.setState({})
        console.log(this.state.name);

}
    render() {
        
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
