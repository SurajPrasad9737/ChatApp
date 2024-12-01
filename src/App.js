import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
