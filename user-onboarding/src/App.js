import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios';
import User from './User'
//import schema from '../validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name:'',
  email: '',
  password: '',
  terms: false,

}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = [];
const initialDisabled = true;



function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState (initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res);
        setUsers(res.data.data);
      }) .catch (err => {
        console.log(err);
      })
  }

  const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then (res => {
        console.log(res);
        setUsers([res.data.data, ...users]);
      }) .catch(err => {
        console.loge(err);
      }) .finally (() => {
        setFormValues(initialFormValues);
      })
  }

  //const validate

  const inputChange = (name, value) => {
    //validate
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = { 
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms'].filter(term => !!formValues[term])
    }
    console.log(newUser);
    postUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <h2>Onboard your users!</h2>
      <Form values ={formValues} change ={inputChange} submit = {formSubmit} disabled = {disabled} errors = {formErrors} />
      {users.map(user =>
        <User user={user} key = {user.id}/>)}
     
    </div>
  );
}

export default App;
