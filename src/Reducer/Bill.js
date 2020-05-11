import * as Types from "../Constant/Bill";

const stateDefault = {
	respone: [],
};

function reducerBills(state = stateDefault, action) {
	switch (action.type) {
		case Types.CREATE_BILL_REQUEST: {
			console.log("action.data:", action.data);
			return {
				...state,
				respone: action.data,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducerBills;
