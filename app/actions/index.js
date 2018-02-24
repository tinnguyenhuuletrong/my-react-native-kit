// @flow

export function actionLogin(userName: String, pass: String) {
    return {
        type: "LOGIN_SUCCESS",
        user: {
            userName
        }
    }
}