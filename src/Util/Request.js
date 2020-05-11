import axios from "axios";

class AxiosService {
	constructor() {
		const instance = axios.create({
			baseURL: "https://my-json-server.typicode.com/huelinh1997/demo_API/",
		});
		instance.interceptors.response.use(this.handlerSuccess, this.handlerError);
		this.instance = instance;
	}

	get(url) {
		return this.instance.get(url);
	}

	post(url, data) {
		return this.instance.post(url, data);
	}

	put(url, data) {
		return this.instance.put(url, data);
	}

	delete(url) {
		return this.instance.delete(url);
	}
}

export default new AxiosService();
