
import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route path="/" >
                <Route index element={<ChatRoom />} />
                <Route path="login" element={<Login />} />

              </Route>
            </Routes>
            <AddRoomModal />
            <InviteMemberModal />
          </AppProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
