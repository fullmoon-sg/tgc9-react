import React from 'react';

class SurveyForm extends React.Component{
 
    state ={
        'firstname' : '',
        'lastname' : '',
        'enquiry': ['support'],
        'country' : 'sg',
        'contactBy': []
    }

    render(){ 
        return(
        <React.Fragment>
            <div>
                <label>Enter your firstname :</label>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateForm}/>
            </div>
            <div>
                <label>Enter your last name: </label>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateForm}/>
            </div>
            <div>
                <label>What are your enquiry</label> 
                <input type="checkbox" name="enquiry" value="support" onChange={this.updateEnquiry} checked={this.state.enquiry.includes('support')}/><label>Support</label>
                <input type="checkbox" name="enquiry" value="sales" onChange={this.updateEnquiry} checked={this.state.enquiry.includes('sales')}/><label>Sales</label>
                 <input type="checkbox" name="enquiry" value="marketing" onChange={this.updateEnquiry} checked={this.state.enquiry.includes('marketing')}/><label>Marketing</label>
            </div>
            <div>
                <label> Where are you from ?</label>
                    <select name="country" onChange={this.updateForm} value={this.state.country}>
                        <option value="sg">Singapore</option>
                        <option value="my">Malaysia</option>
                        <option value="th" >Thailand</option>
                    </select>
            </div>
            <div>
                <label>How to contact you</label>
                <input type="checkbox" name="contactBy" value="slow-mail" onChange={this.state.Checkboxes}/><label>Slow Mail</label>
                  <input type="checkbox" name="contactBy" value="email" onChange={this.state.Checkboxes}/><label>Email</label>
                    <input type="checkbox" name="contactBy" value="phone" onChange={this.state.Checkboxes}/><label>Phone</label>
            </div>

            <button onClick={this.submitForm}>Submit</button>
        </React.Fragment>
        )}

        updateEnquiry = (event) => {
            if(!this.state.enquiry.includes(event.target.value)){
            let copy = [...this.state.enquiry,event.target.value];
            this.setState({
                'enquiry' : copy
            })}
            else{
                let copy = this.state.enquiry.filter((eachEnquiry) => {
                    return eachEnquiry !== MediaEncryptedEvent.target.value
                })
                this.setState({
                    'enquiry' : copy
                })
            }

        }

    updateForm = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    updateCheckboxes = (event) => {
        let originalArray = this.state[event.target.name];
        if (!originalArray.includes(event.target.value)){
            let modified = [...originalArray, event.target.value];
            this.setState({
                [event.target.name] : modified
            })
        }else {
            let modified = originalArray.filter((eachItem) => {
                return eachItem !== event.target.value
            })
            this.setState({
                [event.target.name] : modified
            })
        }
    }

    submitForm = ()=> {
        alert(`First name = ${this.state.firstname}, Last name = ${this.state.lastname}, Enquiry = ${this.state.enquiry}, Country = ${this.state.country}`);
    }


}// end of export

export default SurveyForm;