import React, { useState } from "react";

function ClockFunction() {
    // define useState 
    const [date,setDate] = useState(new Date())
    let timerID2 = setInterval(() => {
        //sets new Date every one second
        setDate(new Date())
    }, 1000);
	return (
		<div>
			<h1>
				⏰ <span style={{ fontSize: "1.2rem" }}>Function Component</span>
			</h1>
            {/* prints the date not props */}
			<p>{date.toLocaleTimeString()}</p>
		</div>
	);
}

// on class components we have the ability to use the lifecycle hooks
export class ClockClass extends React.Component {
	// props from the component
	constructor(props) {
		// pass the props to the base component. It calls the parent class's constructor and binds the parent class's public fields, after which the derived class's constructor can further access and modify "this"
		super(props);
        // initialize the this.state
		this.state = { date: new Date()}; 
	}

    //Lifecycle Methods

    //Component mount - method runs after the component output has been rendered to the DOM.
    componentDidMount() {
      this.timerID = setInterval(() => {
        this.tick()
      }, 1000);
    }
    //Component unmount - the component is destroyed
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    // function to update the date inside the state
    tick(){
        this.setState({
            date: new Date(),
        })
    }
	render() {
		return (
			<div>
				<h1>
					⏰ <span style={{ fontSize: "1.2rem" }}>Class Component</span>
				</h1>
				<p>{this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}
}

export default ClockFunction;
