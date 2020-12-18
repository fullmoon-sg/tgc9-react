import React from 'react'

export default class Form extends React.Component {

    state = {  
        'name' : "",
        'email' : "",
        'color' : "",
        'fruit' : ""
         }

     render() {
        return (
        <React.Fragment>
        <div>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.updateName} style={{border:"4px solid red"}}/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" value={this.state.email} onChange={this.updateEmail}/>
         </div> 
         <div>
             <label>Favourite Color</label>
             <input type="radio" name="color" value="red" onChange={this.updateColor}/><label>Red</label>
             <input type="radio" name="color" value="green" onChange={this.updateColor}/><label>Green</label>
              <input type="radio" name="color" value="blue" onChange={this.updateColor}/><label>Blue</label>
         </div>
         <div>
              <label>Favourite Fruit</label>
             <input type="radio" name="fruit" value="apple" onChange={this.updateFruit}/><label>Apple</label>
             <input type="radio" name="fruit" value="orange" onChange={this.updateFruit}/><label>Orange</label>
              <input type="radio" name="fruit" value="pear" onChange={this.updateFruit}/><label>Pear</label>
         </div>
        </React.Fragment>
        );
    }
    

    updateName = (event) => {
        this.setState({
            name: event.target.value
            })
        }

    updateEmail = (event) => {
        this.setState({
            email : event.target.value
            })
        }
    updateColor = (event) => {
        this.setState({
            color : event.target.value
        })
    }
    updateFruit = (event) => {
        this.setState({
            fruit : event.target.value
        })
    }
}