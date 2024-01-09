import React, { Component ,useState} from 'react'
import NavBar from '../Nav/NavBar'

const Register=()=>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user2={username:{username} ,password:{password}}
    const storedUser = localStorage.getItem('user2');
    localStorage.setItem('user2',user2)

  };

  return (
    <>
      <NavBar />
      <div className='container flex h-fit min-w-full'>
      <div className='xl:w-11/12 md:w-1/2 '>
        <img className='rounded-br-full' src="https://as1.ftcdn.net/v2/jpg/01/51/28/80/1000_F_151288070_e3C9eyqoEc7UnHVg9cVBZE1kJT2Ai42C.jpg" alt="" />
      </div>
      <div className='xl:w-1/2 md:w-1/2'>
        <div className='text-center mt-40 '>
          <h1 className='text-5xl mb-14'>KAYIT OL</h1>
        <input
          className='border-2 h-10 border-black text-center rounded-full mb-5 w-3/5'
          type="text" 
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
                <input
          className='border-2 h-10 border-black text-center rounded-full mb-5 w-3/5'
          type="text" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className='border-2 h-10 text-center border-black rounded-full mb-3 w-3/5'
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin} className='mb-3 w-3/5 mt-5 bg-blue-700 h-10 rounded-full'>Kayıt Ol</button>
        <div className='mt-5 '>Hesabın var mı? Hemen  <a href="/login" className='text-blue-500 underline'>Giriş Yap.</a></div>
      </div>
      </div>
      </div>
    </>
    )
  }


export default Register;