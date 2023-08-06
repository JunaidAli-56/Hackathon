// import React from 'react';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import './App.scss';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path='about' element={<About />} />
//             <Route path='contact' element={<Contact />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//export default App;


import React from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.scss';
import Routes from './pages/Routes';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </>
  );
}

export default App;
