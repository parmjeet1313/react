import React, { useState, useEffect, Fragment } from "react";
import {Button} from 'react-bootstrap'


function Users()
{
    // const [name, setName] = useState("navroop");
  const [user,setUser]=useState([
    { name: 'parmjeet', age: '25', address: 'noida' },
    { name: 'jeet', age: '25' },
    { name: 'sing', age: '20' },
    { name: 'roop', age: '15' },
    { name: 'nav', age: '10' }
  ])    
  return(
      <Fragment>
          <h1>hello listing is here</h1>
          <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
    
        </Fragment>
    )
      

}
export default Users;