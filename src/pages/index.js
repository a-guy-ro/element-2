import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import Home from './home'
import Login from '../components/login'

// import Layout from "../components/layout"

export default function Index() {
  return (
    // <Layout>
    <div>
      {/* {!isLoggedIn() && <h1 style={{color:'white', fontFamily:'Roboto', top:'25%', left:'35%', position:'relative'}}> Guy Ronen, Element 2 </h1>} */}
      <>
        {isLoggedIn() ? (
          <>
          <a
          style={{color:'white', fontFamily:'Roboto',fontSize:'small',zIndex:'1', position:'absolute',top:'1.5%', right:'2.5%'}}
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
              {/* <h1 style={{color:'white'}}> */}
            Logout
            {/* </h1> */}
          </a>
            {/* You are logged in, so check your{" "} */}
            <Home/>
          </>
        ) : (
        //   <p>
        //     You should <Link to="/app/login">log in</Link> to see restricted
        //     content
        //   </p>
        <Login  style={{fontFamily:'Roboto', color:'black', left:'35%'}}/>
        )}
      </>
      </div>
    //  </Layout>
  )
}