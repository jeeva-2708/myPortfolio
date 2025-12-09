import { useEffect } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Skill from './sections/Skill'
import Projects from './sections/Projects'
import './App.css'
import 'flowbite';
function App() {

   useEffect(() => {
    // Initialize Flowbite after component mounts
    import('flowbite').then(module => {
      if (module.initFlowbite) {
        module.initFlowbite();
      }
    });
  }, []);

  return (
    <>
    <section className='max-w-7xl mx-auto font-poppins'>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
    </section>
      
    </>
  )
}

export default App
