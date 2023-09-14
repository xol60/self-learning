
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Createpostpage from './pages/Createpostpage';
import DetailPage from './pages/Detailpage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        < Route path='login' element={<Loginpage />} />
        < Route path='register' element={<Registerpage />} />
        < Route path='create' element={<Createpostpage />} />\
        <Route path='post/:id' element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
