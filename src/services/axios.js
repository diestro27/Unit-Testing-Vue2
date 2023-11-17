import axios from 'axios'

export function getMessage() {
  return axios.get('https://localhost:3000/message').then(response => {
    return response.data
  })
}