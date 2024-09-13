import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputWithButton } from './components/InputWithButton';
import Header from './components/Header';
import Corousel from './components/Corousel';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const domainref = useRef();



  return (
    <>
      <div className="color">
        <Header />
        <div className="pt-16">
          <InputWithButton domainref={domainref} />
          
          <section id="details" className="py-16">
            <div className="flex justify-center w-full px-4 mt-4">
              <div className="w-full max-w-5xl">
                <div className="carousel-wrapper">
                  <Corousel className="carousel-center" />
                </div>
              </div>
            </div>
          </section>
          
          <section id="about-us" className="py-16">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
