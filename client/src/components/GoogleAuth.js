import React from 'react';

        
class GoogleAuth extends React.Component {
    state = { isSigneIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '391262705892-g90k83rv1voi5rn4utjk34jpq07s0151.apps.googleusercontent.com',
                    scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSigneIn: this.auth.isSignedIn.get() });
                // console.log(this.auth.isSigneIn.listen);
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState ({ isSigneIn: this.auth.isSignedIn.get() });
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }



    renderAuthButton() {
        if (this.state.isSigneIn === null) {
            return null;
        } else if (this.state.isSigneIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;