import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            showStatus: ''
        };
    }

    check(event) {
        event.preventDefault();
        if ((localStorage.getItem('c') === this.state.userName) &&
            (localStorage.getItem('d') === this.state.passWord)) {
            console.log('hiieeeee, Success');
                this.setState({showStatus: "sucessfull"})
        } else {
            console.log('wrong');
            this.setState({showStatus: "not sucessfull"})
        }
    }
    render() {
        return (
            <div>
                <form name="form" onSubmit={(event) => { this.check(event) }}>
                    <div className={'form-group'}>
                        <label htmlFor="firstname">Username</label>
                        <input type="text" className="form-control" onChange={(event) => this.setState({ userName: event.target.value })} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstname">Password</label>
                        <input type="password" className="form-control" onChange={(event) => this.setState({ passWord: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                    this.state.showStatus.length ?
                        <h4>{this.state.showStatus}</h4> : null
                }
            </div>
        )
    }
}

export default Login;