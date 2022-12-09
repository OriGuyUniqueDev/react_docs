import WelcomeFunction, { WelcomeClass } from "./main_concepts/componentsProps";
import ConditionalRendering from "./main_concepts/conditionalRendering";
import HandlingEvents, {ToggleEventHandle} from "./main_concepts/handlingEvents";
import List from "./main_concepts/ListandKey";
import ClockFunction, {ClockClass} from "./main_concepts/StateLifecycle";

export default function App() {
	return (
		<div className="mt-6">
			<section className="mb-6">
			    <h1 className="text-3xl font-bold mb-6" style={{textDecoration:"underline",color:"#61DBFB"}}>Components & Props</h1>
			    <WelcomeClass name="Ori Guy Class" />
			    <WelcomeFunction name="Lee Malka Function" />
			</section>
            <section className="mb-6">
                <h1 className="text-3xl font-bold mb-6" style={{textDecoration:"underline",color:"#61DBFB"}}>State & Lifecycle</h1>
                <ClockFunction  />
                <ClockClass />
            </section>
            <section className="mb-6">
                <h1 className="text-3xl font-bold mb-6" style={{textDecoration:"underline",color:"#61DBFB"}}>Handling Events</h1>
                <HandlingEvents />
                <ToggleEventHandle />
            </section>
            <section className="mb-6">
                <h1 className="text-3xl font-bold mb-6" style={{textDecoration:"underline",color:"#61DBFB"}}>Conditional Rendering</h1>
                <ConditionalRendering name="Ori" />
                
            </section>
            <section className="mb-6">
                <h1 className="text-3xl font-bold mb-6" style={{textDecoration:"underline",color:"#61DBFB"}}>List & Keys</h1>
                <List />
                
            </section>
		</div>
	);
}
