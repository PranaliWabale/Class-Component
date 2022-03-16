
import './App.css';
import React from 'react';
import Header from './component/Header';
import Car from './component/Car';
import Form from './component/Form';
import Section from './component/Section';
import Aside from './component/Aside';
import Footer from './component/Footer';
import Pop from './component/Pop';
import Scroll from './component/Scroll';
import Alert from './component/Alert';
import Offcanvas from './component/Offcanvas';

function App() {
  return (
    <>
      
      <Header/>
      <hr/>
    <Car />
     <hr/>
      <Form />
      <Pop/>
      <hr/>
      <Scroll/>
      <hr/>
      <Offcanvas/>
      <hr/>
      <Alert/>
      <hr/>
      <Aside/>
      <hr />
      <Section/>
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
