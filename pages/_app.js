import 'tailwindcss/tailwind.css';
import { AuthProvider } from '../contexts/auth';

function CookieStand({ Component, pageProps }) {
  return (
    <AuthProvider>
       <Component {...pageProps} />
    </AuthProvider>
  );
}

export default CookieStand
