// Resources
// Libs
import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/store'

class Application extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        // @ts-ignore
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(withReduxSaga(Application));
