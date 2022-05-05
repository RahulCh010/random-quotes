import React, { useEffect, useState } from "react";
import { apiStates, QuotesAPI } from "./QuotesAPI";

import "./styles.scss";

const APIURL =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

var colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

export default function RandomQuotes(props) {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const [color, setColor] = useState("");
	const { state, data, error } = QuotesAPI(APIURL);

	const getRandomIndex = (data) => {
		return Math.floor(Math.random() * data.length);
	};

	const getRandomColor = () => {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setColor(randomColor);
		props.selectRandomColor(randomColor);
	};

	const getRandomQuote = () => {
		if (data !== null) {
			const index = getRandomIndex(data.quotes);
			const randomQuote = data.quotes[index];
			setQuote(randomQuote.quote);
			setAuthor(randomQuote.author);
			getRandomColor();
		}
	};

	const quoteBoxInlineStyle = {
		color: color,
		transition: "all 1s ease",
		WebkitTransition: "all 1s ease",
		MozTransition: "all 1s ease",
	};

	const buttonInlineStyle = {
		backgroundColor: color,
		transition: "all 1s ease",
		WebkitTransition: "all 1s ease",
		MozTransition: "all 1s ease",
	};

	let apiResult = "";

	useEffect(() => {
		if (data !== null) {
			const index = getRandomIndex(data.quotes);
			const randomQuote = data.quotes[index];
			setQuote(randomQuote.quote);
			setAuthor(randomQuote.author);
			const randomColor = colors[getRandomIndex(colors)];
			setColor(randomColor);
			props.selectRandomColor(randomColor);
		}
	}, [data, props]);

	switch (state) {
		case apiStates.ERROR:
			apiResult = <p className="error">ERROR: {error || "General error"}</p>;
			break;
		case apiStates.SUCCESS:
			apiResult = (
				<React.Fragment>
					<div className="quote-text">
						<i className="fa fa-quote-left"></i>
						<span id="text">{quote}</span>
					</div>
					<div className="quote-author">
						-<span id="author">{author}</span>
					</div>
				</React.Fragment>
			);
			break;
		default:
			apiResult = <p className="loading">Loading...</p>;
	}

	return (
		<div id="quote-box" style={quoteBoxInlineStyle}>
			{apiResult}
			<div className="buttons">
				<a
					className="button"
					id="tweet-quote"
					title="Tweet this quote!"
					target="_top"
					href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.%22%20Pablo%20Picasso"
					style={buttonInlineStyle}
				>
					<i className="fa fa-twitter"></i>
				</a>
				<a
					className="button"
					id="tumblr-quote"
					title="Post this quote on tumblr!"
					target="_blank"
					rel="noreferrer"
					href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Pablo%20Picasso&amp;content=Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
					style={buttonInlineStyle}
				>
					<i className="fa fa-tumblr"></i>
				</a>
				<button className="button" id="new-quote" onClick={getRandomQuote} style={buttonInlineStyle}>
					New quote
				</button>
			</div>
		</div>
	);
}
