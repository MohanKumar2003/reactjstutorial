import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import MainApp from "./components/eventhandlers/OnClickEvent";

function App() {
	return (
		<div className="App">
			<FunctionalComponent />
			<ClassComponent /><hr />
			<MainApp />
		</div>
	)
}

export default App;
