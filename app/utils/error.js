const DefineError = {
    MissingUserNameOrPass: {
        message: "Missing UserName or Password"
    },
    Common: {
        message: "Unknown error"
    }
}

export default function getErrorMessage(errorName) {
    return (DefineError[errorName] || DefineError['Common']).message;
}