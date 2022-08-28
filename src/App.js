import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import List from './pages/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
  }

export default App;
