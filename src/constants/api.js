export const API_ROOT =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080/api"
		: "https://skibble-backend-prod.herokuapp.com/api";

export const WS_ROOT =
	process.env.NODE_ENV === "development"
		? "http://localhost:8080/lobby"
		: "https://https://skibble-backend-prod.herokuapp.com/lobby";
