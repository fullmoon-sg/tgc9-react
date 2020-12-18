import React from 'react'

export default class FormAdvanced extends React.Component {

    state = {
        'name': "",
        'email': "",
        'color': "",
        'time': "",
        'country':"",
        'fruits': []
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateFormField} style={{ border: "4px solid red" }} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Favourite Color</label>
                    <input type="radio" name="color" value="red" onChange={this.updateFormField} checked={this.state.color === 'red'} /><label>Red</label>
                    <input type="radio" name="color" value="green" onChange={this.updateFormField} checked={this.state.color === 'green'} /><label>Green</label>
                    <input type="radio" name="color" value="blue" onChange={this.updateFormField} checked={this.state.color === 'blue'} /><label>Blue</label>
                </div>
                <div>
                    <label>Favourite Time</label>
                    <input type="radio" name="time" value="morning" onChange={this.updateFormField} checked={this.state.time === "morning"} /><label>Morning</label>
                    <input type="radio" name="time" value="afternoon" onChange={this.updateFormField} checked={this.state.time === "afternoon"} /><label>Afternoon</label>
                    <input type="radio" name="time" value="night" onChange={this.updateFormField} checked={this.state.time === "night"} /><label>Night</label>
                </div>
                <div>
                    <label>Favourite Fruits</label>
                    <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruit} checked={this.state.fruits.includes('orange')}/><label>Orange</label>
                     <input type="checkbox" name="fruits" value="watermelon" onChange={this.updateFruit}checked={this.state.fruits.includes('watermelon')}/><label>Watermelon</label>
                      <input type="checkbox" name="fruits" value="mango" onChange={this.updateFruit} checked={this.state.fruits.includes('mango')}/><label>Mango</label>
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" onChange={this.updateFormField}>
                        <option value="sg" checked={this.state.country.includes('sg')}>Singapore</option>
                        <option value="my" checked={this.state.country.includes('my')}>Malaysia</option>
                        <option value="th" checked={this.state.country.includes('th')}>Thailand</option>
                    </select>
                </div>

            </React.Fragment>
        );
    }

    updateFruit = (event) => {
        
        if(!this.state.fruits.includes(event.target.value)){
        let copy = [...this.state.fruits,event.target.value];
        this.setState({
            'fruits' : copy
            })
        }else{
            let copy = this.state.fruits.filter((eachFruit) => {
                return eachFruit !== event.target.value
            })
            this.setState({
            'fruits' : copy    
           })
         }
    }
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

}// end of export