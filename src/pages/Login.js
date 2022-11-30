import { useContext, useState } from "react"

// import AuthContext from "../contexts/auth-context"
// import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'

function Login() {
  // const auth = useContext(AuthContext)
  // const auth = useSelector(auth)
  // const dispatch = useDispatch()
  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = (key, value) => setForm({ ...form, [key]: value })

  return <form className="Login">
    <input type="text" onChange={(e) => handleChange('username', e.target.value)} />
    <br />
    <input type="password" onChange={(e) => handleChange('password', e.target.value)} />
    <br />
    <button
      disabled={form.username === '' || form.password === ''}
    // onClick={() => auth.login(form.username)}
    // onClick={() => dispatch(login())}
    >
      Login
    </button>
  </form>
}

export default Login;