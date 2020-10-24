import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SimpleSurveyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      respondent_data : {
        full_name: '',
        gender: '',
        bio: '',
        programming_languages: '',
        agree: false
      }

    };
     this.onformInputChangeHandler = this.onformInputChangeHandler.bind(this);
     this.onSurveyFormSubmit = this.onSurveyFormSubmit.bind(this);

  }

  onformInputChangeHandler = e=> {
    const name=e.target.name;
    const value=e.target.value === 'checkbox' ? e.target.checked : e.target.value;
    // const value=e.target.value
    
    
    this.setState(
      {respondent_data: {
        ...this.state.respondent_data, 
        [name]:value
      }});
    
    
  }

  onSurveyFormSubmit= e=> {
    e.preventDefault();
   if(this.state.respondent_data.full_name === "" && !this.state.respondent_data.full_name.length < 5) {
     alert("Please Enter your full Name");
   }  else if (this.state.respondent_data.gender === "") {
    alert ("Please choose gender");
   } else if (this.state.respondent_data.programming_languages === "") {
    alert ("Please select a programming language");
  } else if(this.state.respondent_data.bio === ""&& this.state.respondent_data.bio.length < 15) {
    alert("Please Enter a mimimum of 15 characters in the bio");
  } else if (this.state.respondent_data.agree !== "on") {
    alert("Please agree to the terms and conditions");
  } else {
    console.log("Submitted response", this.state.respondent_data);
  }
  
  }

  isValid(){

    if (this.state.respondent_data.full_name === "" ||
    this.state.respondent_data.gender === "" ||
    this.state.respondent_data.bio === "" ||
    this.state.respondent_data.programming_languages ==="" ||
    this.state.respondent_data.agree !== "on"
    ) {
        return false
    }
    return true
  }
 

  render(){
    return(
      <div className="section is-fullheight">
        <div className="heading">
        <h3> Simple Survey Application</h3>
        </div>
        <div className ="survey-form column">
        <form>
          <div className="form-element">
            <label>
              Enter Full Name : 
            </label>
            <br></br>
            <input  
            className="input" 
            type= "text" 
            name= "full_name" 
            value={this.state.respondent_data.full_name} 
            onChange={this.onformInputChangeHandler}
            >
            </input>
          
          </div>
          <div className="form-element">
          <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              name="gender"
              checked={this.state.respondent_data.gender === "Male"}
              onChange={this.onformInputChangeHandler}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              name="gender"
              checked={this.state.respondent_data.gender  === "Female"}
              onChange={this.onformInputChangeHandler}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              name="gender"
              checked={this.state.respondent_data.gender === "Other"}
              onChange={this.onformInputChangeHandler}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.respondent_data.gender}
        </div>
          </div>
          <div className="form-element">
            <label>
              Select the Language you use most : 
            </label>
            <br></br>
            <select className="input" name="programming_languages" value={this.state.respondent_data.programming_languages} onChange={this.onformInputChangeHandler}>
                <option value="Javascript">Javascript</option>
                <option value="C++">C++</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
            </select>
          </div>
          <div className="form-element">
            <label>
              Bio : 
            </label>
            <br></br>
            <textarea  className="input" type= "text" name= "bio" value={this.state.respondent_data.bio} onChange={this.onformInputChangeHandler}>
            </textarea>
          </div>
          <div className="form-element">
          <input
                name="agree"
                type="checkbox"
                checked={this.state.respondent_data.agree}
                onChange={this.onformInputChangeHandler} />
            <label>
            I agree to Terms and Conditions
            </label>
            
          </div>
          <div>
          <button onClick={this.onSurveyFormSubmit}> Submit</button>
          </div>
          <br></br>
        </form>
        </div>
        <div>
          
        </div>
        
        
      </div>
      
    )
  }
}

const element= <SimpleSurveyComponent></SimpleSurveyComponent>
ReactDOM.render(element, document.getElementById("root"));