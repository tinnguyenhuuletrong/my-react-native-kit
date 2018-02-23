import React, { View } from 'react';
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import App from "../App"

export interface Props { }
export interface State {
    store: Object,
    isStoreLoaded: boolean,
}

export default class Boot extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isStoreLoaded: false
        }
    }

    componentWillMount() {
        this.setState({
            store: configureStore(_ => this.setState({ isStoreLoaded: true }))
        })
    }

    isLoadingComplete() {
        return this.state.isStoreLoaded;
    }

    render() {
        if (!this.isLoadingComplete())
            return null;
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        )
    }
};
