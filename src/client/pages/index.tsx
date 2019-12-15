// Resources
import './login.scss';

// Libs
import * as React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

// Component
import Layout from '../components/layout/layout';

// Redux
import { reqFetch } from "../redux/actions/hello/helloActionCreators";

export class LoginPage extends React.PureComponent {

    static getInitialProps(props) {
        const {
            store,
            isServer,
        } = props;
        store.dispatch(reqFetch());
        return {
            isServer
        }
    }

    render() {
        return (
            <Layout title="Virtual mind" description="Some description useful for SEO">
                <div className="vtm-login">
                    <form className="vtm-login__form" action="#">

                        <h1 className="vtm-login__title">Login</h1>

                        <div className="vtm-login__form-row vtm-login__form-username mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="user-name-field" />
                            <label className="mdl-textfield__label" htmlFor="user-name-field">
                                Username
                            </label>
                        </div>

                        <div className="vtm-login__form-row vtm-login__form-password mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="password-field" />
                            <label className="mdl-textfield__label" htmlFor="password-field">
                                Password
                            </label>
                        </div>

                        <br></br>

                        <Link href="/articles">
                            <button
                                type="submit"
                                className="vtm-login__form-submit mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                            >
                                Login
                            </button>
                        </Link>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default connect(state => {
    return state
})(LoginPage);
