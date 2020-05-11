import * as Types from "../Constant/Bill";

const stateDefault = {};

function reducerBills(state = stateDefault, action) {
	switch (action.type) {
		case Types.CREATE_BILL_REQUEST: {
			return {};
		}
		default: {
			return state;
		}
	}
}

export default reducerBills;
