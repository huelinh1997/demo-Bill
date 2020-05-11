import * as billTypes from "./../Constant/Bill";
import { createBillService } from "../Util/ApiCaller";

export const createBillRequest = (text) => {
	return (dispatch) => {
		const res = createBillService(text);
		if (res.status === 200) {
			dispatch(createBill(res.data));
		} else alert("Không thể kết nối dữ liệu!");
	};
};

export const createBill = (data) => {
	return {
		type: billTypes.CREATE_BILL_REQUEST,
		data,
	};
};
