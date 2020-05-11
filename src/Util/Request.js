import axios from "axios";

const request = axios.create({
	baseURL: `baseurl`,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default request;
