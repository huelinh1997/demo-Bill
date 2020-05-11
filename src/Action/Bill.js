import * as billTypes from "./../Constant/Bill";
import { createBillService } from "../Util/ApiCaller";

export const createBillRequest = () => {
	return (dispatch) => {
		const res = createBillService();
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
