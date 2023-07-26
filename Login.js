
const express= require('express');
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended:false}))

app.use('/api/login',require('./routes/api/login'))
app.listen(8080,console.log("server running....!"))
import axios from 'axios';
const handleLogin = (event) => {
  event.preventDefault();

  const { username, password } = event.target.elements;

  axios.post('/login', {
    username,
    password,
  })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
    })
    .catch((error) => {
      console.error(error);
    });
};