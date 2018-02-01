import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            passWord: '',
            confirmPassWord: '',
            showStat : ''
        }
    }

  
    formSubmit(event) {
        console.log(this.state)
        event.preventDefault();
        if(this.state.passWord === this.state.confirmPassWord)  {
            localStorage.setItem('a',this.state.firstName);
            localStorage.setItem('b',this.state.lastName);
            localStorage.setItem('c',this.state.userName);
            localStorage.setItem('d',this.state.passWord);
            //localStorage.setItem('e',this.state.confirmPassWord);
            this.setState({showStat: "successfully signed up"})
        } else {
            this.setState({showStat: "not matched"})

        }
      
    }

    render() {
        // console.log(this.state)
        return (
            <div>
            <form name="form" onSubmit={(event) => this.formSubmit(event)}>
                <div className={'form-group'} >
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" onChange={(event) => this.setState({ firstName: event.target.value })} className="form-control" />
                </div>
                <div className='form-group' >
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" onChange={(event) => this.setState({ lastName: event.target.value })} className="form-control" />
                </div>
                <div className='form-group' >
                    <label htmlFor="email">Username</label>
                    <input type="text" onChange={(event) => this.setState({ userName: event.target.value })} className="form-control" />
                </div>
                <div className='form-group' >
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(event) => this.setState({ passWord: event.target.value })} className="form-control" />
                </div>
                <div className='form-group' >
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" onChange={(event) => this.setState({confirmPassWord: event.target.value })} className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </div>
            </form>
              {
                this.state.showStat.length ?
                    <h4>{this.state.showStat}</h4> : null
            }
            </div>
        )
    }
}

export default Register;