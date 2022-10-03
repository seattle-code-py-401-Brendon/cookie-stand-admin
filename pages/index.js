import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';
import LoginForm from './components/loginForm.js';

import { useState } from "react"
// hardcoded store, uncomment me to see it add to datatable
const stores = [
  // {
  //   location: 'Calexico',
  //   cookiesPerHour: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  // }
]

const totalStores = stores.length;



export default function Home() {

  const [user, setUser] = useState();

    function loginHandler(newUser){
      setUser(newUser);
    }

  return (
    <div className='bg-main-color h-screen'>
      <Header />
      {
        user ? <Main stores={stores} totalStores={totalStores} /> : <LoginForm onLogin={loginHandler} />
      }
      
      <Footer totalStores={totalStores} />
    </div>
  );
}
