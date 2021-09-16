import React, { useEffect, useState } from "react";
import { apiStates, QuotesAPI } from "./QuotesAPI";

import "./styles.scss";

const APIURL =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export default function RandomQuotes(props) {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const { state, data, error } = QuotesAPI(APIURL);

	const getRandomQuoteIndex = (data) => {
		return Math.floor(Math.random() * data.quotes.length);
	};

	const getRandomQuote = () => {
		if (state === "SUCCESS") {
			const index = getRandomQuoteIndex(data);
			const randomQuote = data.quotes[index];
			setQuote(randomQuote.quote);
			setAuthor(randomQuote.author);
		}
	};

	let apiResult = "";

	useEffect(() => {
		getRandomQuote();
	}, [state]);

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
		<div id="quote-box">
			{apiResult}
			<div className="buttons">
				<a
					className="button"
					id="tweet-quote"
					title="Tweet this quote!"
					target="_top"
					href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.%22%20Pablo%20Picasso"
				>
					<i className="fa fa-twitter"></i>
				</a>
				<a
					className="button"
					id="tumblr-quote"
					title="Post this quote on tumblr!"
					target="_blank"
					href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Pablo%20Picasso&amp;content=Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
				>
					<i className="fa fa-tumblr"></i>
				</a>
				<button className="button" id="new-quote" onClick={getRandomQuote}>
					New quote
				</button>
			</div>
		</div>
	);
}
