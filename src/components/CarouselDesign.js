export function ContentType1({ image }) {
  return (
    <>
      <div className="absolute w-full h-full flex top-0 left-0">
        <div className="h-full items-center flex w-2/5 bg-[#F7F7F7] shadow-2xl">
          <div className="w-full 2xl:px-20 pl-8 pr-3 sm:px-14 z-20 text-black">
            <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-5">
              {image.title}
            </h1>
            <p className="lg:text-md xl:text-lg 2xl:text-xl text-sm mb-4 lg:mb-6">{image.description}</p>
            <a
              href={image.link}
              className="lg:text-md text-md inline-block px-4 py-2 text-white bg-black rounded hover:bg-slate-700 transition-transform duration-400 transform hover:scale-105"
            >
              {image.buttonText}
            </a>
          </div>
        </div>
        <div className="w-3/5 h-full overflow-hidden">
          <img
            src={image.src}
            alt="slides"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export function ContentType2({ image }) {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-black/50 to-black absolute z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src={image.src}
          alt="slides"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-1/3 top-1/2 -translate-y-1/2 right-12 sm:right-16 z-20 text-white">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-6">{image.title}</h1>
        <p className="lg:text-md xl:text-lg 2xl:text-xl text-sm mb-5 lg:mb-7">{image.description}</p>
        <a
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:text-md text-md inline-block duration:400 transition-transform ease-in-out hover:scale-105 px-4 py-2 text-black bg-white rounded hover:bg-gray-200"
        >
          {image.buttonText}
        </a>
      </div>
    </>
  );
}

export function ContentType3({ image }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-full h-full bg-black/40 backdrop-blur-sm"></div>
        <img
          src={image.src}
          alt="slides"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full flex items-center justify-center z-20 text-white px-4">
        <div className="text-center justify-center w-1/2">
          <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-5">{image.title}</h1>
          <p className="lg:text-md xl:text-lg 2xl:text-xl text-sm mb-5 mx-auto lg:mb-6">{image.description}</p>
          <a
            href={image.link}
            className="lg:text-md text-md inline-block duration-400 transition-transform ease-in-out hover:scale-105 px-4 py-2 text-black bg-white rounded hover:bg-gray-200"
          >
            {image.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
