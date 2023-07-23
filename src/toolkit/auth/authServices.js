import axios from 'axios'





const signUp = async (data) => {
  const res = await axios.post('/users/create', data)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res.data
}


const login = async (data) => {
  const res = await axios.post('http://localhost:8000/api/token/', data)
    console.log(res.data)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res.data
}


const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  signUp,
  login,
  logout,
}

export default authService