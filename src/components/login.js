import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import css from '../utils/style.css'
class Login extends React.Component {
  state = {
    // username: ``,
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
    return (
      <div style={{backgroundColor:'black', width:'100%', height:'100%', position:'absolute', top:'0', left:'0'}}>
          <span style={{display:'block', color:'white'}}>
          <h1 style={{color:'white', fontFamily:'Roboto', top:'25%', left:'35%', position:'relative'}}> Guy Ronen, Element 2 </h1>
        {/* <h1>Log in</h1> */}
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
          style={{
              fontFamily:'Roboto',
              position:'relative',
              left:'35%'

          }}
        >
          {/* <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label> */}
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
              style={{
                  marginLeft:'1.5%'
              }}
            />
          </label>
          <input type="submit" value="Log In" style={{fontFamily:'Roboto'}}/>
        </form>
        </span>
      </div>
    )
  }
}
export default Login