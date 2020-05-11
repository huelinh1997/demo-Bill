import request from "../Util/Request";

const createBillService = () => {
	return request({
		url: "",
		method: "",
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error.response.data;
		});
};

export { createBillService };
