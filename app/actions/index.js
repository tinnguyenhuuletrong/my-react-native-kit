// @flow

function actionLoading(val: Boolean) {
    return {
        type: val ? "SHOW_LOADING" : "HIDE_LOADING"
    }
}

export function actionLogin(dispatch: Function, userName: String, pass: String) {
    console.log(dispatch)
    return new Promise((resolve, reject) => {
        dispatch(actionLoading(true));
        setTimeout(_ => {
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