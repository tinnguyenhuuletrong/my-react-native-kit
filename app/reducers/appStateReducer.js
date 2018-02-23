const initialState = {
	isLoading: true,
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}