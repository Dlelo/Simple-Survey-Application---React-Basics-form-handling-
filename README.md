# Simple-Survey-Application---Reactjs-Basics-form-handling

## Introduction
Form are necessary in an application to login a user, register a user, get user feeback, get user details and so much more. 

This tutorial is useful to beginners who have never interacted with react. Those who have little knowledge on react. It is also a good reminder to expert react developers who want a reminder on the basics of handling react forms.

## Step 1 : Set-up 
### Download NodeJs (Windows)
Go to [Node.js site](https://nodejs.org) and download NodeJS.
<img src="/doc-img/nodejs-site.png" alt="Nodejs Website"/>
Download and install the LTS Version (Recommended) of your respective operating system.

### Install NodeJs and npm (Linux in Ubuntu 20.04)
01. Install Nodejs by inputting on terminal  and run the command:

```
$ sudo apt install nodejs

```

02. Confirm NodeJs installation by confirming the version with the command

```
$ node --version

```

```
### Output

v10.19.0

```
03. Install npm by inputting on terminal  and run the command:

```
$ sudo apt install npm

```

04. Confirm npm installation by confirming the version with the command

```
$ npm --version

```
### Output

```
6.14.4

```

05. Install text editor such as VisualStudio Code (You can use your prefered text editor).
Follow Download and installation instructions in [Visual Studio Website](https://code.visualstudio.com/download).
<img src="/doc-img/vscodesite.png" alt="Visual Studio Code"/>



### Create React App
The app was kick started with [Create React App ](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) .
Open VS Code Terminal and type


```
$ npx create-react-app simple-survey-app
cd simple-survey-app
npm start

```
Output in the terminal will be:

```
You can now view simple-survey-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://xxx.xxx.x.xxx:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

```

The browser will open http://localhost:3000/ . 
This is what will be visible on the browser.

<img src="/doc-img/create-react-app output.png" alt="Create React app output on the browser"/>

You will see the files of the created app visible in the Opened File Explorer of the text editor.
If you expand the folder *simple-survey-app*  it will look as shown below.

<img src="/doc-img/files-createapp.png" alt="Create React app output on the browser"/>



## Step 2 : Create React Class Components
We will Create our React Element using JSX. 
First navigate to the *src* folder and open *index.js* file.

We will remove everything in that file and leave only the imports as shown in the image below:

<img src="/doc-img/default-index-js.png" alt="Remove defaults in indexjs"/>


We will create a react class Component *SimpleSurveyComponent* 

In the class we will implement *render()* method that will *return* a simple form in a *div* container.

```
class SimpleSurveyComponent extends React.Component {
  render(){
    return(
      <div>
        <h3> Simple Survey Application</h3>
        <form>
          <div>
            <label>
              Enter Full Name : 
              <input type= "text" name= "full_name">
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

```
The output
<img src="/doc-img/simple-form.png" alt="Remove defaults in indexjs"/>


## Step 3 : Controlled Component (Input)

In this simple survey app, react will control the values of the input field . 

This is because the the input of the user will be part of the application *state* .

Just before the **render()** method of the *SimpleSurveyComponent* class

We will add a constructor to the above class that accepts properties as an argument. 
The properties will be passed to a base constructor using the *super* key word. 
We will initialize the component *state*  with a *Property* called **full_name** that holds an empty string as its value. 
```

constructor(props) {
    super(props);
    this.state = {
      full_name: ''
    };
  }

```
###

We bind the value of the input text field and the value is obtained from the value of the **state object**.

```
<input type= "text" name= "full_name" value={this.state.full_name}>
              </input> 
```

A method called *forinputChangeHandler*(e) is created. It will accept an input which will have the information of entered form input field value in this case the input text value. 
It will have a *setState()* method that will update the value of form text input value to the **State Object** . 

```
onformInputChangeHandler = e=> {
    this.setState(
      {full_name: e.target.value}
      )
  }

```
The above method will listen to the text input whenever there is a change in the input using the **onChange()**. The input attribute it will be set back to the above property named *full_name* to the updated value.

Once the state is set, react calls the *render* method again and the new value is available in the form input value as shown below. The react state is the single source of truth  for the below input.
 

```
<input type= "text" name= "full_name" value={this.state.full_name} onChange={this.onformInputChangeHandler}>
              </input>
```

We will create a method to handle form submit. This will output the **full_name** on the console.

```
onSurveyFormSubmit=()=> {
    console.log(this.state.full_name)
  }
```

We will then add a click event on the Submit button. 

```
 <button onclick={this.onSurveyFormSubmit}> Submit</button>
```

The code so far will be as below:

```
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

```
The output on the browser:
<img src="/doc-img/submit-form.png" alt="Remove defaults in indexjs"/>


## Step 4 : Handling multiple inputs
We will modify our state component to handle more than one form element. We will introduce an object that will initializes the various properties as empty strings.
```
 constructor(props) {
    super(props);
    this.state = {
      respondent_data : {
        full_name: '',
        bio: '',
        programming_languages: 'Choose Language',
      }   
    };
  }
```
We will also modify the **onformInputChangeHandler()** method to handle all the form inputs *onChange()* event and update the *state Object* using the **setState()** method.
It will have the element *name* that the user is changing and *value*

```
onformInputChangeHandler = e=> {
    const name=e.target.name;
    const value=e.target.value;

    this.setState(
      {respondent_data: {
        ...this.state.respondent_data, 
        [name]:value
      }});
  }
```

### Adding Select Tag
The following *Div* was added in the form

```
 <div>
  <label>
    Choose the Programming Languages you use : 
    <select name="programming_languages" value={this.state.respondent_data.programming_languages} onChange={this.onformInputChangeHandler}>
      <option value="Javascript">Javascript</option>
      <option value="CSS">CSS</option>
      <option value="Python">Python</option>
      <option value="C++">C++</option>
    </select>
  </label>
</div>

```
To ensure the selected element is updates the state object with the selected value. The below lines were added in the  *constructor* .

```
 this.handleInputChange = this.onformInputChangeHandler.bind(this);

  this.handleFormSubmit = this.onSurveyFormSubmit.bind(this);

```

The method **onformInputChangeHandler()** is updated . It will accommodate the checkbox selected input by listening if it checked and updating the selected value to the checked value.

```
const value=e.target.value === 'checkbox' ? e.target.checked : e.target.value;

```

This is how the code looks like with all the form inputs.

```
import React from 'react';
import ReactDOM from 'react-dom';


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
      <div>
        <h3> Simple Survey Application</h3>
        <form>
          <div>
            <label>
              Enter Full Name : 
              <input type= "text" name= "full_name" value={this.state.respondent_data.full_name} onChange={this.onformInputChangeHandler}>
              </input>
            </label>
          </div>
          <div>
            <label>
              Select the Language you use most : 
              <select name="programming_languages" value={this.state.respondent_data.programming_languages} onChange={this.onformInputChangeHandler}>
                <option value="Javascript">Javascript</option>
                <option value="C++">C++</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Bio : 
              <textarea type= "text" name= "bio" value={this.state.respondent_data.bio} onChange={this.onformInputChangeHandler}>
              </textarea>
            </label>
          </div>
          <div>
            <label>
              <input
                name="agree"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
                 I agree to Terms and Conditions
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

```

The form in the browser is as shown below:
<img src="/doc-img/complete-form.png" alt="Complete form"/>

## Step 4 : Styling the form using CSS classes
CSS classes are most recommended for site performance. I implemented the styles in the *index.css* file with the below classes which I added in the form.

The simple survey form after styling.

<img src="/doc-img/styled-survey-form.png" alt="Styled form"/>

## Step 5 : Validating controlled input form 

### Form validation: validating input values submitted by user.
We will validate the form further . We will check the input submitted by a user and ensuring it matches the needed criteria.

Adding the below validation in the submit button method **onSurveyFormSubmit()**. The method will look as below.

```
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
```
The simple survey form with the above validation will work as shown below

[SEE DEMO ](https://www.facebook.com/100000900405696/videos/4928089517231013/) .

### Form validation: Disabling the submit button until all inputs are filled.
A function called *invalid()* noted below will disable the **Submit** action button.

```
 isValid(){

    if (this.state.respondent_data.full_name === "" ||
    this.state.respondent_data.gender === "" ||
    this.state.respondent_data.bio === "" ||
    this.state.respondent_data.programming_languages ==="" ||
    this.state.respondent_data.agree === false
    ) {
        return false
    }
    return true
  }
 
```

Then, the *submit* button will include the **disabled** attribute as shown below:

```
 <button disabled={!this.isValid()} onClick={this.onSurveyFormSubmit}> Submit</button>

```
The simple survey application at this point will work as shown below

[SEE DEMO ](https://www.facebook.com/100000900405696/videos/4928089517231013/) .


