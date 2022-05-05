import { useState, useEffect } from "react";

export const apiStates = {
	LOADING: "LOADING",
	ERROR: "ERROR",
	SUCCESS: "SUCCESS",
};

export const QuotesAPI = (url) => {
	const [data, setData] = useState({
		state: apiStates.LOADING,
		error: "",
		data: null,
	});

	useEffect(() => {
		const setPartData = (partialData) =>
			setData((prevData) => {
				return { ...prevData, ...partialData };
			});

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPartData({
					state: apiStates.SUCCESS,
					data,
				});
			})
			.catch(() => {
				setPartData({
					state: apiStates.ERROR,
					error: "fetch failed",
				});
			});
	}, [url]);

	return data;
};
