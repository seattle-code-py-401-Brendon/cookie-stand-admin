import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';


// hardcoded store, uncomment me to see it add to datatable
const stores = [
  // {
  //   location: 'Calexico',
  //   cookiesPerHour: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  // }
]

const totalStores = stores.length;

export default function Home() {
  return (
    <div className='bg-main-color h-screen'>
      <Header />
      <Main stores={stores} totalStores={totalStores} />
      <Footer totalStores={totalStores} />
    </div>
  );
}
