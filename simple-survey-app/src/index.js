import React from 'react';
import ReactDOM from 'react-dom';


class SimpleSurveyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      full_name: ''
    };
  }

  formInputChangeHandler = e=> {
    this.setState({full_name: e.target.value})
  }

  render(){
    return(
      <div>
        <h3> Simple Survey Application</h3>
        <form>
          <div>
            <label>
              Enter Full Name : 
              <input type= "text" name= "full_name" value={this.state.full_name}>
              </input>
            </label>
          </div>
        </form>
        <button> Submit</button>
      </div>
    )
  }
}

const element= <SimpleSurveyComponent></SimpleSurveyComponent>
ReactDOM.render(element, document.getElementById("root"));