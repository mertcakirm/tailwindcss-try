import React, { Component , useState } from 'react'
import NavBar from '../Nav/NavBar';
const Login = () => {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user1');
    
    if (storedUser) {
      const user1={username:"yourname",password1:"12345"}
      if (user1.username === username && user1.password1 === password) {
        console.log("basarili");
        window.location.href  ="/register"; 
      } else {
        alert('Kullanıcı adı veya şifre yanlış!');
      }
    } else {
      alert('Kullanıcı bulunamadı!');
    }
  };

  return (
    <>
      <NavBar />
      <div className='container flex h-fit min-w-full'>
      <div className='xl:w-11/12 md:w-1/2 '>
        <img className='rounded-br-full' src="https://as2.ftcdn.net/v2/jpg/02/79/42/39/1000_F_279423926_9EcUxTJ6HWXHLVEUmfzYODBjFYdNpUzp.jpg" alt="" />
      </div>
      <div className='xl:w-1/2 md:w-1/2'>
        <div className='text-center mt-40 '>
          <h1 className='text-5xl mb-14'>Giriş Yap</h1>
        <input
          className='border-2 h-10 border-black text-center rounded-full mb-5 w-3/5'
          type="text" 
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button onClick={handleLogin} className='mb-3 w-3/5 mt-5 bg-blue-700 h-10 rounded-full'>Giriş Yap</button>
        <div className='mt-5 '>Hesabın yok mu? Hemen  <a href="/register" className='text-blue-500 underline'>Kayıt Ol.</a></div>
      </div>
      </div>
      </div>
    </>
  );
};


export default Login;