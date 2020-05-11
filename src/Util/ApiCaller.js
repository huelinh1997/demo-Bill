// import request from "../Util/Request";

// const createBillService = () => {
// 	return request({
// 		url: "/movie",
// 		method: "GET",
// 	})
// 		.then((res) => {
// 			return res;
// 		})
// 		.catch((error) => {
// 			return error.response.data;
// 		});
// };

// export { createBillService };

import AxiosService from "../Util/Request";

export const createBillService = () => {
	return AxiosService.get(`movie`); //
};
