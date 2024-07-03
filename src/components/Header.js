import React, { useState } from 'react';
import { ExternalLink, Menu } from 'lucide-react';
import SideBar from './Sidebar';

export default function MenuBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleClickOpen = () => {
    isSideBarOpen ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
  };

  return (
    <>

      <div className="flex bg-white bg-opacity-90 justify-between items-center shadow-lg w-full h-16">
        <section className="flex ml-4 text-sm space-x-10">
          <Menu
            onClick={handleClickOpen}
            className="hover:cursor-pointer flex sm:hidden w-6"
          />
          <div className="hidden sm:flex">
            <p>Subscribe</p>
          </div>
          <div className="hidden sm:flex">
            <p>Donate</p>
          </div>
          <div className="hidden items-center sm:flex">
            <p className="mr-1">Library Shop</p>
            <ExternalLink size={13}/>
          </div>
        </section>
        <section className="flex text-sm items-center mr-4 space-x-4">
          <div className="flex items-center">
            <p className="mr-1">Search the catalogue</p>
            <ExternalLink size={13}/>
          </div>
          <div className="flex items-center">
            <p className="mr-1">Catalogue login</p>
            <ExternalLink size={13}/>
          </div>
        </section>
        {isSideBarOpen && <SideBar setIsSideBarOpen={setIsSideBarOpen} />}
      </div>
      <div className="w-full flex font-light text-3xl text-center h-20 items-center justify-center">
        STATE LIBRARY OF QUEENSLAND
      </div>
      <nav className="w-full gap-8 font-semibold text-center items-center justify-center flex bg-black h-16 text-white">
        <a href="/">WHAT'S ON</a>
        <a href="/">COLLECTIONS</a>
        <a href="/">SERVICES</a>
        <a href="/">VISIT</a>
        <a href="/">DISCOVER</a>
        <a href="/">GET INVOLVED</a>
        <a href="/">ABOUT</a>
        <button aria-label="Search">🔍</button>
      </nav>
    </>
  );
}
