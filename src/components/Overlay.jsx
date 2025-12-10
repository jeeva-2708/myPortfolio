import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Overlay = () => {
  return (
    <div className='absolute top-1/4 left-1/4 max-w-3/4 sm:max-w-1/2  p-10 bg-overlayBg rounded-2xl'>
       <div className="relative"> <FontAwesomeIcon icon={faCircleXmark} size="xl" color="white" className="absolute left-full -top-6 transition-transform duration-100 hover:scale-110" /></div>
        <div className='my-4 border border-amber-50 rounded-xl'>
            <img className="rounded-xl " src="./images/moviemaniax.png" alt="" />
        </div>
        <div className="my-2.5" >
            <p className='text-sm text-gray-50 font-extralight'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a className="py-1 px-3 sm:py-3 sm:px-5 rounded-2xl bg-blue-400" href=""><span><FontAwesomeIcon icon={faLink} /></span><span className="text-[15px]"> Live Demo</span></a>
          <a className="py-1 px-3 sm:py-3 sm:px-5 rounded-2xl bg-blue-950" href=""><span><FontAwesomeIcon icon={faGithub} /></span><span> View Code</span></a>
        </div>
    </div>
  )
}

export default Overlay