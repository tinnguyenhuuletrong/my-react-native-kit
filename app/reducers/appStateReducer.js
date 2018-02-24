const initialState = {
	user: null,
	isLoading: false,
};

export default function(state: any = initialState, action: Function) {
	console.log(action)
	if (action.type === "SHOW_LOADING") {
		return {
			...state,
			isLoading: true,
		};
	}
	else if (action.type === "HIDE_LOADING") {
		return {
			...state,
			isLoading: false,
		};
	}
	else if (action.type === "LOGIN_SUCCESS") {
		return {
			...state,
			user: action.user,
		};
	}
	return state;
}