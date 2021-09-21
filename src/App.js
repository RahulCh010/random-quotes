import { useState } from "react";
import "./App.css";
import RandomQuotes from "./components/RandomQuotes";

function App() {
	const [color, setColor] = useState("");

	const setRandomColor = (color) => {
		setColor(color);
	};

	const wrapperInlineStyle = {
		backgroundColor: color,
		transition: "all 1s ease",
		WebkitTransition: "all 1s ease",
		MozTransition: "all 1s ease",
	};

	return (
		<div className="wrapper" style={wrapperInlineStyle}>
			<RandomQuotes selectRandomColor={setRandomColor} />
		</div>
	);
}

export default App;
