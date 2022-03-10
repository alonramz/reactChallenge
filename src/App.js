//done // VERY EASY: Inszipcodee of your ‘App’ class ‘render’ method, 
//return a div with your basic information for example name, number, date of birth and etc. 
//This div should be hard-coded to prepare for the Medium Challenge.

//done // EASY: Create a ‘constructor’ that takes in ‘props’ , 
//call the ‘super()’ method, and set ‘this.state’ 
//to an empty object inszipcodee of the ‘App’ class. 
//Inszipcodee of ‘this.state’ create a ‘person’ property and set it to an empty object

// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ 
// in the constructor.  Then take the returned ‘div’ and create a component, 
// pass state into it and import it as ‘BasicInfo’. 
// (This challenge should not change the look of the page)

// HARD: Now that you have a basic react app to display 
//one person’s worth of information, now modify the app 
//to iterate over an array of people’s basic information, 
//while still keeping the new list of contacts in the top-level of state. 
//(Optional: add styling to space out each person’s info)

import React from 'react';
import './App.css';
//import './components/BasicInfo.js'
 
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person: {},
          name: "Alondra",
          phoneNumber: "773-000-5555",
          dateOfBirth: 4-19-2022,
          cityOfBirth: "Chicago",
          occupation: "Coding Apprentice" 
    }
  }

  render(){
    return(
      <div className = "App">
        <div className="BasicInfo">
        <h1>Hello, my name is {this.state.name}</h1>
        <p>You can reach me at {this.state.phoneNumber}</p>
        <p>I was born in {this.state.cityOfBirth}</p>
        <p>Right now I am a {this.state.occupation}</p>
        </div>
      </div>
    )
  }
}

let friends = [
  { firstName: "Steven", lastName: "Soto", age: "5", zipcode: 28273 },
  { firstName: "Maria", lastName: "Mendez", age: "3", zipcode: 28226 },
  { firstName: "Trevor", lastName: "Boyd", age: "2", zipcode: 28210 },
  { firstName: "Anto", lastName: "Garcia", age: "1", zipcode: 28278 },
  { firstName: "Hannah", lastName: "Montana", age: "6", zipcode: 28015 }
]

function MyApp(){
  return (
    <>
    {friends.map(friend => <friend firstName={friend.firstName} lastName={friend.lastName} age={friend.age} key={friend.zipcode} />)}
    </>
  )
}

// function CallPeople(props) {
//   return <li>{props.firstName} {props.lastName} and is {props.age} and lives in {props.zipcode}.</li>
// }


export default App;
