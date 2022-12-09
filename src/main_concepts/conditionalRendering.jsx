import { useState } from "react";

function Greeting({name}) {
	return <h2>Welcome {name} 🥰</h2>;
}

function Guest() {
	return <h2>Welcome Guest 🥰</h2>;
}

function ConditionalRendering({name}) {
	let [isLoggedIn, setIsLoggedIn] = useState(true);

	function changeLoginState() {
		setIsLoggedIn(!isLoggedIn);
	}

	if (isLoggedIn) {
		return (
			<div>
				<Greeting name={name}/>
                <button
					onClick={changeLoginState}
					className="px-4 py-2 mt-3 w-fit  font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					change isLoggedIn
				</button>
			</div>
		);
	} else {
		return (
			<div>
				<Guest />
                <button
					onClick={changeLoginState}
					className="px-4 py-2 mt-3 w-fit  font-bold bg-indigo-600 rounded-xl drop-shadow-2xl shadow-indigo-200"
				>
					change isLoggedIn
				</button>
			</div>
		);
	}
}

export default ConditionalRendering;
