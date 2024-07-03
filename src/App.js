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
        <div className="bg-gray-100 mb-4 h-[calc(100vh-64px)] sm:h-[700px] md:px-10 xl:py-10 w-full px-3 xl:px-40 flex items-center justify-center rounded-md">
          <section className="sm:w-[400px] xl:w-[600px]">
            <div className="text-4xl font-bold mb-2">Discover our</div>
            <div className="text-4xl font-bold mb-2">Latest Collection</div>
            <div className="">Explore our uniquely designed products</div>
            <div className="mb-3">for your home and lifestyle</div>
            <button className="hover:-translate-y-1 transition duration-300 ease-in-out transform hover:shadow-lg rounded-xl">
              Shop Now
            </button>
          </section>
          <section>
            <img
              alt="shoe"
              width={0}
              height={0}
              sizes="100vw"
              className="hidden sm:flex md:w-[400px] xl:w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/headset.webp"
            />
          </section>
        </div>
        <section className="mb-20 gap-4 grid-cols-1 sm:grid-cols-3 sm:grid">
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <img
              alt="clothes"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/clothes.webp"
            />
          </div>
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <img
              alt="lamp"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/lamp.webp"
            />
          </div>
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <img
              alt="watch"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/watch.webp"
            />
          </div>
        </section>
      </main>
      <ImageCarousel isDialogOpen={isDialogOpen} closeDialog={closeDialog} />
    </>
  );
};

export default App;
