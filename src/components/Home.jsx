import prabin from "../assets/prabin.png";
function Home() {
  return (
    <>
    <section id="home" className=" min-h-screen grid grid-cols-2 gap-8 items-center px-10 bg-slate-900" >
      <div className="max-w-xl space-y-5 mx-16 mt-20 ">
        <h1 className="text-5xl font-bold text-white">Prabin Karki</h1>
        <p className=" text-2xl text-white mt-4">
          Aspiring BEI student with knowledge of everything
        </p>
      </div>
      <div className="flex justify-center">
        <img src={prabin} alt="profile picture" className="w-80 h-80 rounded-full object-cover mt-20"></img>
      </div>

     <div className="flex flex-col space-y-3 mx-16 text-2xl text-white items-start">
     <a className=" w-fit hover:text-pink-300 transition duration-300" href="#home">Home</a>
     <a className=" w-fit hover:text-pink-300 transition duration-300" href="#about">About</a>
     <a className="w-fit hover:text-pink-300 transition duration-300" href="#projects">Projects</a>
    <a className="w-fit hover:text-pink-300 transition duration-300" href="#skills">Skills</a>
    <a className=" w-fit hover:text-pink-300 transition duration-300" href="#contact">Contact Me</a>
</div>
      </section>
    </>
  );
}

export default Home;