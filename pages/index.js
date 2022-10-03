import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';
import LoginForm from './components/loginForm.js';
import { useAuth } from '../contexts/auth';
// hardcoded store, uncomment me to see it add to datatable
const stores = [
  // {
  //   location: 'Calexico',
  //   cookiesPerHour: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  // }
]

const totalStores = stores.length;



export default function Home() {

  const {user, login, logout} = useAuth();

  function loginHandler(newUser){
    login(newUser.username, newUser.password);
  }

  return (
    <div className='bg-main-color h-screen'>
      <Header />
      {
        user ? <Main stores={stores} user={user} logout={logout} totalStores={totalStores} /> : <LoginForm onLogin={loginHandler} />
      }
      <Footer totalStores={totalStores} />
    </div>
  );
}
