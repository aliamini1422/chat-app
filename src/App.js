import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./Pages/NotFount";
import Login from "./Pages/login";
import ChatRoom from "./Pages/chatRoom";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/chat-room" />}/>
        <Route path="/chat-room" element={
          // <ProtectedRoute>
            <ChatRoom />
          // </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
