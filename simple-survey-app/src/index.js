import React from 'react';
import ReactDOM from 'react-dom';


class SimpleSurveyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      full_name: ''
    };
  }

  onformInputChangeHandler = e=> {
    this.setState({full_name: e.target.value})
  }

  onSurveyFormSubmit=()=> {
    console.log(this.state.full_name)
  }

  render(){
    return(
      <div>
        <h3> Simple Survey Application</h3>
        <form>
          <div>
            <label>
              Enter Full Name : 
              <input type= "text" name= "full_name" value={this.state.full_name} onChange={this.onformInputChangeHandler}>
              </input>
            </label>
          </div>
        </form>
        <button onClick={this.onSurveyFormSubmit}> Submit</button>
        <div>
        </div>
      </div>
      
    )
  }
}

const element= <SimpleSurveyComponent></SimpleSurveyComponent>
ReactDOM.render(element, document.getElementById("root"));