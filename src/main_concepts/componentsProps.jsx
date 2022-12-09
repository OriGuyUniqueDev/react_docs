import React from "react"

// Functional Component
function WelcomeFunction(props) {
    return <h2 style={{fontWeight:400}}>Hello {props.name}</h2>      
}

// Functional Component - the props comes from React.Component
export class WelcomeClass extends React.Component {
    render(){
        return <h2 style={{fontWeight:400}}>Hello {this.props.name}</h2> 
    }
}

// How To convert Function component to class component ?
/*
    1. create class that extends React.Component
    2. inside the class add render(){}
    3. place the content inside the render function the the return statement
    4. add "this" to props "this.props"

*/

export default WelcomeFunction