import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
const Footer = () => {
  return (
    <>
    <section id="footer" className="pl-8 md:px-20 max-w-7xl mx-auto font-poppins mb-20 mt-20 md:mt-0">
      <div className="flex flex-col [769px]:flex-row gap-10  justify-between">
        {/* About me */}
        <div className="flex flex-col gap-5 md:gap-10 ">
          <h1 className="text-primaryText font-extrabold text-3xl sm:text-5xl">JEEVA</h1>
          <p className="text-gray-400 w-3xs ">
            Full Stack Developer passionate about building fast, modern, and
            user-focused web applications.
          </p>
          <div className="flex gap-5 text-white">
            <span>
              <a href="https://www.linkedin.com/in/jeeva-viswanathan-b2a44b274/">
                <SiLinkedin size={25} />
              </a>
            </span>
            <span>
              <a href="https://github.com/jeeva-2708">
                <SiGithub size={25} />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/jeeva._27/">
                <SiInstagram size={25} />
              </a>
            </span>
          </div>
        </div>
        {/* Quick Links */}
        <div className="text-white">
          <div className="mb-5 md:mb-10">
            <h2 className="text-lg font-bold">Quick Links</h2>
          </div>
          <div className="flex flex-col gap-2.5 font-light text-gray-400">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        {/* Contact */}
        <div className="text-white">
          <div className="mb-5 md:mb-10">
            <h2 className="text-lg font-bold">Contact</h2>
          </div>
          <div className="flex flex-col gap-2.5 font-light text-gray-400">
            <p>Chennai, Tamil Nadu</p>
            <p>phone: 9600896499</p>
            <p>Email: jeeva.viswanthan04@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full h-0.5 bg-gray-800 mb-10"></div>
    <div className="text-center text-gray-600 text-lg my-10">© 2025. All Rights Reserved</div>
    </>
  );
};

export default Footer;
