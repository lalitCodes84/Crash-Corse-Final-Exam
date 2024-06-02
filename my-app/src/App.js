// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext'; 
import Navbar from './components/Navbar'; 
import HomePage from './pages/HomePage'; 
import LoginPage from './pages/LoginPage'; 
import ProductDetailsPage from './pages/ProductDetailsPage'; 
import PrivateRoute from './components/PrivateRoute'; 

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
       <BrowserRouter> {/* Changed BrowserRouter as Router to BrowserRouter */}
        <Navbar />
         <Routes>
           <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
           <Route path="/product/:id" element={<PrivateRoute><ProductDetailsPage /></PrivateRoute>} />
         </Routes>
      </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
