import * as React from 'react';
import Navigation from './navigation';
import './styles/main.css'
import './styles/font.css'
import AuthProvider from './providers/auth/indext';
 
function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}

export default App;
 