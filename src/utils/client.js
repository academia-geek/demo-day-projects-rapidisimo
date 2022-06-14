import axios from 'axios'

const clientRapidisimo = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})

export default clientRapidisimo