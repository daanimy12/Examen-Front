import React from 'react'
import {Redirect} from 'react-router-dom'
const NotFound=()=>{
  return(
    <div className="container">
    <div className="not-found">
    <h2>404 Page Not Found!</h2>
    </div>
    <Redirect to="/"/>
</div>
  )
}

export default NotFound