import React, { useState } from 'react';
import ImageCarousel from './components/ImageCarousel';
import Header from './components/Header';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  function closeDialog() {
    setIsDialogOpen(false);
  }
  return (
    <>
      <main
        className={`min-h-screen mx-auto max-w-full w-[100vw] xl:w-[1500px] transition-filter duration-300 ease-in-out ${
          isDialogOpen ? 'filter blur-lg' : ''
        }`}
      >
        <Header />
        <img
          className="h-[400px] w-full object-cover"
          alt="main page"
          src="/mainpagephoto.jpg"
        />
      </main>
      <ImageCarousel isDialogOpen={isDialogOpen} closeDialog={closeDialog} />
    </>
  );
};

export default App;
