export const API_ROOT =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080/api"
		: process.env.BACK_ENV === "development"
			? "https://skibble-backend-dev.herokuapp.com/api"
			: "https://skibble-backend-prod.herokuapp.com/api"

export const WS_ROOT =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080/lobby"
		: process.env.BACK_ENV === "development"
			? "https://skibble-backend-dev.herokuapp.com/lobby"
			: "https://skibble-backend-prod.herokuapp.com/lobby"