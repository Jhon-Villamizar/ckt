import React from 'react';
import { useDispatch } from 'react-redux';
import { users } from '../../redux/actions';

const Button = () => {

  const dispatch = useDispatch();

  const getUsers = async () => {
    const request = await fetch('https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE')
    const response = await request.json();
    dispatch(users(response.data));
  }

  return(
    <div className="row">
      <div className="col-md-12">
      <button onClick = {getUsers} className="btn btn-primary my-5">Get Users</button>
      </div>
    </div>
  )
}

export default Button;