import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SimpleSurveyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      respondent_data : {
        full_name: '',
        bio: '',
        programming_languages: 'Choose Language',
      }
    };
     this.handleInputChange = this.onformInputChangeHandler.bind(this);
     this.handleFormSubmit = this.onSurveyFormSubmit.bind(this);

  }

  onformInputChangeHandler = e=> {
    const name=e.target.name;
    const value=e.target.value === 'checkbox' ? e.target.checked : e.target.value;

    this.setState(
      {respondent_data: {
        ...this.state.respondent_data, 
        [name]:value
      }});
  }

  onSurveyFormSubmit= e=> {
    e.preventDefault();
    console.log(this.state.respondent_data);
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
            <input  className="input" type= "text" name= "full_name" value={this.state.respondent_data.full_name} onChange={this.onformInputChangeHandler}>
              </input>
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
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            <label>
            I agree to Terms and Conditions
            </label>
            
          </div>
          <div>
          <button onClick={this.onSurveyFormSubmit}> Submit</button>
          </div>
        </form>
        </div>
        
        
      </div>
      
    )
  }
}

const element= <SimpleSurveyComponent></SimpleSurveyComponent>
ReactDOM.render(element, document.getElementById("root"));