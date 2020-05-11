import * as billTypes from "./../Constant/Bill";
import * as ApiCall from "../Util/ApiCaller";

export const createBillRequest = (text) => {
	return (dispatch) => {
		return ApiCall.createBillService().then((res) => {
			console.log("res in action:", res);
			if (res.status === 200) {
				console.log("res.data:", res.data);
				dispatch(createBill(res.data));
				alert("Success!");
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};

export const createBill = (data) => {
	return {
		type: billTypes.CREATE_BILL_REQUEST,
		data,
	};
};
