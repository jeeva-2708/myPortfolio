import { SiLinkedin, SiGithub, SiInstagram  } from "react-icons/si";
import { LuCloudDownload } from "react-icons/lu";
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <section id="home" className="h-screen bg-[url('/images/mainBg.svg')] z-30 bg-no-repeat bg-center bg-cover ">
        <NavBar/>
        {/* follow me section  */}
        <div className="hidden lg:flex items-center gap-5 rotate-90 absolute top-1/2 right-64 text-white">
            <span>Follow Me</span >
            <div className="w-14 h-0.5 bg-primaryText"></div>
            <div className="flex gap-4"> 
              <span className="-rotate-90"><a href="https://www.linkedin.com/in/jeeva-viswanathan-b2a44b274/"><SiLinkedin /></a></span>
              <span className="-rotate-90"><a href="https://github.com/jeeva-2708"><SiGithub /></a></span>
              <span className="-rotate-90"><a href=""><SiInstagram /></a></span>
            </div>
          </div>
        {/* Main section */}
        <div className='h-screen flex flex-col justify-center sm:items-center md:block md:pt-44 lg:pt-32  px-5 lg:px-0 '>
          <div>
            <h1 className='text-sectionfcolor font-extrabold text-[110px] sm:text-[200px] lg:text-[300px] '>HELLO</h1>
          </div>
          <div>
            <h1 className='text-[20px] sm:text-3xl md:text-4xl md:leading-15 text-white '>
             <span className="flex flex-col sm:block md:flex md:flex-col">I'm <span><span className='font-bold'>Jeeva</span> Viswanathan</span> </span>
            </h1>
          </div>
          {/* lineOne */}
          <div className="w-20 md:w-44 h-0.5 md:h-1 mt-3 bg-primaryText"></div>
          <div>
            <span className="inline-block text-[13px] md:text-lg font-extralight my-5 md:font-light text-white">Full-Stack Developer Focused on Clean UI & Robust APIs</span>
          </div>
          <div className="text-white" >
            <span className="inline-block px-6 py-3 bg-primaryText rounded-md">
              <a className="flex items-center gap-2" href="/files/Jeeva_FullStack_Resume.pdf" download><span className="text-2xl"><LuCloudDownload /></span><span>Download CV</span></a>
            </span>
          </div>
        </div>
    </section>
  )
}

export default Home