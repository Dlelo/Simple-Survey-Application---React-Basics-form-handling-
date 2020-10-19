# Simple-Survey-Application---React-Basics-form-handling

## Introduction
Form are necessary in an application. They are used to login a user, register a user, get user feeback, get user details and so much more. 

This tutorial is useful for beginners who have never interracted with react, those who have little knowledge on react as well as the expert react developers who want a reminder on the basics of handling react forms.

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

02. Confirm NodeJs is installed by confirming the version with the command

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

04. Confirm npm is installed by confirming the version with the command

```
$ npm --version

```
### Output

```
6.14.4

```

05. Install text editor such as VisualStudio Code (You can use your prefered text editor)
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


## Step 3 : Controlled Input

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
## Step 4 : Managing forms State

We bind the value of the input text field and the value is obtained from the value of the **state object**.

```
<input type= "text" name= "full_name" value={this.state.full_name}>
              </input> 
```

A method called *forinputChangeHandler*(e) is created, that will accept an input which will have the information of entered form input field value in this case the input text value. 
It will have a *setState()* method that will update the value of form text input value to the **State Object** . 

```
onformInputChangeHandler = e=> {
    this.setState({full_name: e.target.value})
  }

```
The above method will use to listen to the text input whenever there is a change in the input using the **onChange()** input attribute. 

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









## Step 5 : Validating forms and show validation messages




