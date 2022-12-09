import WelcomeFunction, { WelcomeClass } from "./main_concepts/componentsProps";
import ClockFunction, {ClockClass} from "./main_concepts/StateLifecycle";


export default function App() {
	return (
		<div>
			<h1 style={{textDecoration:"underline",color:"#61DBFB"}}>Components & Props</h1>
			<WelcomeClass name="Ori Guy Class" />
			<WelcomeFunction name="Lee Malka Function" />
            <h1 style={{textDecoration:"underline",color:"#61DBFB"}}>State & Lifecycle</h1>
            <ClockFunction  />
            <ClockClass />
		</div>
	);
}
