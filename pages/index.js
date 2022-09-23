import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';


export default function Home() {
  return (
    <div className='bg-main-color h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
