import { useState, useEffect } from "react"



const NavBar = () => {

  const [active, setActive] = useState("home");

  useEffect(()=> {

    const handleScroll = () => {
      const sections = ['home', 'about', 'skill', 'projects', 'contact'];


      sections.forEach((id) => {
        const el = document.getElementById(id);
        const top = el?.getBoundingClientRect().top;

        if(top>=0 && top < window.innerHeight / 2){
          setActive(id);
        }
      });
      
    }

    window.addEventListener('scroll', handleScroll);
    return()=> window.removeEventListener('scroll', handleScroll);
  },[]);




  return (
    // <div className='flex items-center justify-between p-5'>
    //     <div><a href='#home' className='font-extrabold text-4xl text-primaryText'>JEEVA</a></div>
    //     <div className='w-[597px] flex justify-between text-white'>
    //         <a href="#home">Home</a>
    //         <a href="#about">About</a>
    //         <a href="#skill">Skill</a>
    //         <a href="#projects">Projects</a>
    //         <a href="#contact">Contact</a>
    //     </div>
    //     <div className='text-white'>
    //         <a href="">Hire Me</a>
    //     </div>
    // </div>

    

<nav className="w-full fixed z-20  start-0 border-b  bg-white/10 backdrop-blur-lg ">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4">
    <a href='#home' className='font-extrabold text-3xl pl-2 lg:pl-0 lg-text-4xl text-primaryText'>JEEVA</a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:pr-2">
        <a href="#contact" className="text-white bg-[#3C54DB] active:bg-[#3B52C3] hover:bg-primaryText px-5 py-2 lg:px-12 rounded-sm">Hire Me</a>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading  focus:ring-2 focus:ring-hoverBg" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium rounded-base bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:bg-transparent md:backdrop-blur-none md:border-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <a href="#home" className={`${active === 'home' ? "text-primaryText font-bold" : "text-white"} block py-2 px-3 hover:bg-hoverBg  rounded-sm `} >Home</a>
        </li>
        <li>
          <a href="#about" className={`${active === 'about' ? "text-primaryText font-bold" : "text-white"} block py-2 px-3 hover:bg-hoverBg rounded-sm `}>About</a>
        </li>
        <li>
          <a href="#skill" className={`${active === 'skill' ? "text-primaryText font-bold" : "text-white"} block py-2 px-3 hover:bg-hoverBg rounded-sm `}>Skill</a>
        </li>
        <li>
          <a href="#projects" className={`${active === 'projects' ? "text-primaryText font-bold" : "text-white"} block py-2 px-3 hover:bg-hoverBg rounded-sm `}>Projects</a>
        </li>
        <li>
          <a href="#contact" className={`${active === 'contact' ? "text-primaryText font-bold" : "text-white"} block py-2 px-3 hover:bg-hoverBg rounded-sm `}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavBar