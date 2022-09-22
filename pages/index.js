import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';


export default function Home() {
  return (
    <div className='bg-main-color border-solid border-2 border-indigo-600 h-screen flex flex-col'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
