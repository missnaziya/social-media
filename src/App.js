import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
