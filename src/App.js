import { useState } from 'react';

import './App.scss';
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
// import AuthContext from "./contexts/auth-context"
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [user, setUser] = useState(null)
  const login = (username) => setUser(username)
  const logout = () => setUser(null)

  return (
    <Provider store={store}>
      {/* <AuthContext.Provider value={{ user, login, logout }}> */}
      <div className="App">
        <Header />
        {user ? <Home /> : <Login />}
      </div>
      {/* </AuthContext.Provider> */}
    </Provider>
  );
}

export default App;
