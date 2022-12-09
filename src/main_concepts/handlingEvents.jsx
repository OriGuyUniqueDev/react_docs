import JSConfetti from "js-confetti";
import React from "react";

function HandlingEvents() {
	function blowUp() {
		const jsConfetti = new JSConfetti();
		jsConfetti.addConfetti({
			emojis: ["🧑‍💻", "👨‍💻", "👩‍💻", "⭐", "💡", "❤️"],
			emojiSize: 40,
			confettiNumber: 30,
		});
	}
	return (
		<div>
			<button
				//handle the event - use camelCase and pass inside the {} the function of js code to execute
				onClick={blowUp}
				className="px-4 py-2 font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
			>
				Click to see Magic (function)
			</button>
		</div>
	);
}
export class ToggleEventHandle extends React.Component {
	constructor(props) {
		super(props);
		//add state to toggle
		this.state = { isToggledOn: true, okOrNot: false };
		// This binding is necessary to make `this` work in the callback
		//  JavaScript, class methods are not bound by default. so we need to bind it so it will not be undefined
		// the this is refers to the render JSX
		this.toggler = this.togglerWithBind.bind(this);
	}

	togglerWithBind() {
		//prevState contain an object with the states and the we modify the desire state
		this.setState((prevState) => ({
			isToggledOn: !prevState.isToggledOn,
			okOrNot: !prevState.okOrNot,
		}));
	}

	// class fields syntax - This syntax ensures `this` is bound within togglerWithoutBind.
	togglerWithoutBind = () => {
		//prevState contain an object with the states and the we modify the desire state
		this.setState((prevState) => ({
			isToggledOn: !prevState.isToggledOn,
			okOrNot: !prevState.okOrNot,
		}));
	}
	logThis() {
		console.log("this:", this);
	}

	render() {
		return (
			<div className="flex flex-col gap-2">
				<button
					//handle the event - use camelCase and pass inside the {} the function of js code to execute
					onClick={this.toggler}
					className="px-4 py-2 mt-3 w-fit font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					with bind (class)
				</button>
				<button
					//handle the event - use camelCase and pass inside the {} the function of js code to execute
					onClick={this.togglerWithoutBind}
					className="px-4 py-2 mt-3 w-fit font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					without bind (class)
				</button>
				<div>
					<p>State: {this.state.isToggledOn ? "ON" : "OFF"}</p>
					<p>okOrNot: {this.state.okOrNot ? "✅" : "❎"}</p>
				</div>
				<button
					//handle the event - use camelCase and pass inside the {} the function of js code to execute
					onClick={this.logThis}
					className="px-4 py-2 mt-3 w-fit font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					log this without bind (class)
				</button>
				<button
					//handle the event - use camelCase and pass inside the {} the function of js code to execute
					onClick={() => this.logThis()}
					className="px-4 py-2 mt-3 w-fit  font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					log this with/callback arrow bind (class)
				</button>
			</div>
		);
	}
}

export default HandlingEvents;
