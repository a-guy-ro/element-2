import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Login from "../components/login"
import Home from './home'


const App = () => (
//   <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Home} />
      <Login path="/app/login" />
    </Router>
//   </Layout>
)
export default App