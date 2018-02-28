// @flow

function actionLoading(val: boolean) {
    return {
        type: val ? "SHOW_LOADING" : "HIDE_LOADING"
    }
}

export function actionLogin(dispatch: Function, userName: String, pass: String) : Promise<Object> {
    return new Promise((resolve, reject) => {
        dispatch(actionLoading(true));
        setTimeout(val => {
            dispatch(actionLoading(false));
            resolve({
                type: "LOGIN_SUCCESS",
                user: {
                    userName
                }
            })
        }, 1000);
    })
}