import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import login from '../actions/action';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
        };
    }

    check(event) {
        event.preventDefault();
        let usr = {
            userName : this.state.userName,
            passwd: this.state.passWord
        }

        this.props.loginn(usr);
        // if ((localStorage.getItem('c') === this.state.userName) &&
        //     (localStorage.getItem('d') === this.state.passWord)) {
        //     console.log('hiieeeee, Success');
        //         this.setState({showStatus: "sucessfull"})
        // } else {
        //     console.log('wrong');
        //     this.setState({showStatus: "not sucessfull"})
        // }
    }
    render() {
        let renderStatus =this.props.statusprop ?<h1>{this.props.statusprop}</h1>:null
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
                {renderStatus}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginn:login},dispatch)
}
function mapStateToProps(state) {
    return {
        statusprop:state.status

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);