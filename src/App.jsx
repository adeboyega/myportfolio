import { useState } from 'react'
import './App.css'
import { FaCode } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import picme from './assets/picme.jpeg';
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import belsoft from './assets/belsoft.png'
import weatherapp from './assets/weatherapp.png'
import wordabbrevation from './assets/wordabbrevation.png'
import taskmgr from './assets/taskmgt.png'
import { IoClose } from "react-icons/io5";
import resume from './assets/AbayomiAremocv.pdf'

function App() {
const [active, setactive] = useState(false)

const handleclick=()=>{
  setactive(!active)
}
  return (
    <div className=' text-md text-gray-400 bg-[#0a192f] flex flex-col gap-5 w-full overflow-x-hidden scroll-smooth min-h-screen'>
      {/* Nav bar starts here */}
      <nav className='flex justify-between px-4 py-4 text-2xl'>
      <FaCode className={'text-gray-400' } size={55}/>
     
      <ul className={active ? 'flex flex-col gap-2 z-10 w-[60%] h-screen p-2 items-center justify-evenly transition ease-in-out duration-500 sm:hidden':'-translate-x-[200%] sm:hidden '}>
      <a href="#about">ABOUT</a>
      <a href="#projects"> PROJECTS</a>
      <a href="#blog">BLOG</a>
      <a href="#contact"> CONTACT</a>
      <a href={resume} download={resume} className='px-6 py-2 border-2 border-gray-400 text-blue-900 font-bold rounded-lg shadow-lg'>RESUME</a>
      </ul>
      <ul className='hidden sm:flex justify-evenly w-[85%] items-center  '>
      <a href="#about">ABOUT</a>
      <a href="#projects"> PROJECTS</a>
      <a href="#blog">BLOG</a>
      <a href="#contact"> CONTACT</a>
      <a href={resume} download={resume} className='px-6 py-2 border-2 translate-x-16 border-gray-400 text-blue-900 font-bold rounded-lg shadow-lg'>RESUME</a>
      </ul>
      {
        active ? <IoClose onClick={handleclick} size={60} className='flex sm:hidden' /> : <MdMenu onClick={handleclick} size={55} className='flex sm:hidden'/>
      }
      </nav>
      {/* firstsection */}
      <section id='home' className='flex flex-col justify-center items-center text-sm p-2 w-full -translate-y-12 sm:grid sm:grid-cols-2  sm:p-8 sm:mt-20 sm:text-xl  sm:justify-center  '>
       
        <div className='flex flex-col m-4 gap-3 sm:w-[80%] sm:ml-10'>
        <p className='m-4'><span className='text-2xl'>-</span> MY NAME IS</p>
        <h2 className='text-blue-900  text-4xl m-4 '>Abayomi Aremo</h2>
        <p className='m-4'>Creative frontend developer, who specializes in
         designing visually appealing and intuitive user interfaces that improve
         user experience. Proficient in Html, Tailwind Css, Javascript and React.</p>
         <div className='flex m-4 gap-3 text-2xl sm:text-5xl'>
         <a href="https://github.com/adeboyega" target='_blank'><FaGithub/></a>
          <a href="https://x.com/Bayo_6" target='_blank'><FaXTwitter /></a>
          <a href="www.linkedin.com/in/abayomi-aremo" target='_blank'><CiLinkedin /></a>
          <a href="mailto:abayomiaremo0@gmail.com" target='_blank'><MdOutlineMailOutline /></a>
         </div>
         

        </div>
        <div className='bg-gray-600 sm:ml-60 rounded-lg flex items-center justify-center w-60 h-[300px] mx-auto -rotate-6 -translate-x-3'>
          <img src={picme} alt="mypic" className='rounded-lg h-[300px] rotate-6 translate-x-6 translate-y-6 ' />
        </div>

      </section>
      {/* secondsection */}

      <section id='about' className='text-sm p-2 w-full flex flex-col justify-evenly items-center gap-3 m-2 h-screen'>
        <div className='flex flex-col gap-3'>
        <p ><span className='text-2xl'>-</span> LEARING PATH</p>
        <h2 className='text-3xl mb-6 sm:-mb-10 text-blue-900 '>ABOUT & SKILLS</h2>
        </div>
        <p className='sm:w-[60%]  w-[85%] -mt-10 sm:mt-5 sm:text-xl'>
        Hello👋 and welcome to my portfolio! I'm Abayomi Aremo, a Frontend developer who is passionate about creating beautiful, interactive, and user-friendly websites. I enjoy researching new design trends and technologies as a creative problem solver. My knowledge of frontend development extends beyond coding. I also create technical content. Thank you for visiting my portfolio! Please feel free to browse through my projects.
        </p>
        <div className='grid grid-cols-3 items-center gap-6 mt-2 mx-auto w-[75%]'>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32 '>
          <FaReact size={30} className='mx-auto'/>
          <p>REACT</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32'>
          <FaNpm size={30} className='mx-auto'/>
          <p className='ml-3'>NPM</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32 '>
          <RiTailwindCssFill size={30} className='mx-auto'/>
          <p>Tailwind</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32 '>
          <FaCss3 size={30} className='mx-auto'/>
          <p className='ml-3'>CSS</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32'>
          <SiMongodb size={30} className='mx-auto'/>
          <p>Mongodb</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32'>
          <FaNode size={60} className='mx-auto'/>
          {/* <p className='mx-auto'>Node</p> */}
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32'>
          <FaGitAlt size={30} className='mx-auto'/>
          <p className='ml-3'>GIT</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32 '>
          <FaRobot size={30} className='mx-auto'/>
          <p className='ml-3'>AICE</p>
          </div>
          <div className='gap-2 text-xl sm:flex sm:flex-col justify-center sm:items-center sm:h-32'>
          <IoLogoFirebase size={30} className='mx-auto'/>
          <p>FIREBASE</p>
          </div>
        </div>
      </section>
     <section id='projects'  className='text-sm p-2 w-full flex flex-col justify-center items-center gap-6 m-2'>
     <p ><span className='text-2xl'>-</span> MY WORK</p>
        <h2 className='text-3xl mb-6 text-blue-900 '>PROJECTS</h2>
     
      <div className='sm:gird sm:grid-cols-2 w-full p-2 gap-5 sm:flex '>
      <div className='flex flex-col gap-2 w-[95%] sm:w-[45%] mb-10  mx-auto bg-gray-400 p-2 text-gray-900 rounded-lg '>
        <p className='text-2xl text-gray-600'>Personal Project </p>
        <h2 className='text-3xl font-bold text-gray-600'>Belsoft company website</h2>
        <p>
        I developed a sleek, modern company website using React and Tailwind CSS. The site showcases a responsive design, ensuring a seamless user experience across all devices, from desktops to mobile phones. Leveraging the power of React, I built dynamic, reusable components that enhance performance and maintainability. Tailwind CSS allowed me to rapidly style the site with precision, creating a visually appealing and cohesive layout.
        </p>
        <div className='flex justify-between p-2 text-gray-600'>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>react.js</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Tailwind</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Firebase</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>RTK</p>
         
        </div>
        <div className='flex p-2 gap-4'>
          <a href="#"><FaGithub size={30}/></a>
          <a href="https://www.belsoftsystems.com/" target='_blank'><CiLink size={30} /></a>
        </div>

      </div>
      <img src={belsoft} alt="belsoft" className='w-[90%] mx-auto rounded-lg sm:w-[600px]' />
      </div>
      {/* STARTED */}
      <div className='sm:gird sm:grid-cols-2 w-full p-2 gap-5 sm:flex'>
      <div className='flex flex-col mb-10 gap-2 w-[95%] mx-auto bg-gray-400 p-2 text-gray-900 rounded-lg '>
        <p className='text-2xl text-gray-600'>Personal Project </p>
        <h2 className='text-3xl font-bold text-gray-600'>Weather App</h2>
        <p>
        I created an intuitive weather app using React, Tailwind CSS, and a weather API. The app provides real-time weather updates and forecasts for any location, offering a user-friendly interface and a sleek design.
        </p>
        <div className='flex justify-between p-2 text-gray-600'>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>react.js</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Tailwind</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>API</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>hostinger</p>
         
        </div>
        <div className='flex p-2 gap-4'>
          <a href="#"><FaGithub size={30}/></a>
          <a href="https://monumental-selkie-cd433b.netlify.app" target='_blank'><CiLink size={30} /></a>
        </div>

      </div>
      <img src={weatherapp} alt="belsoft" className='w-[90%] mx-auto rounded-lg sm:w-[620px]' />
      </div>
     
      {/* STARTED */}
      <div className='sm:gird sm:grid-cols-2 w-full p-2 gap-5 sm:flex'>
      <div className='flex flex-col mb-10 gap-2 w-[95%] mx-auto bg-gray-400 p-2 text-gray-900 rounded-lg '>
        <p className='text-2xl text-gray-600'>Personal Project </p>
        <h2 className='text-3xl font-bold text-gray-600'>Word Abbrevation Finder</h2>
        <p>
        I developed a full-stack Word Abbreviation Finder app using React, Node.js, Express, Tailwind CSS, and MongoDB. This application allows users to find and save common abbreviations, providing a robust tool for quick reference and learning.
        </p>
        <div className='flex justify-between p-2 text-gray-600'>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>react.js</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Tailwind</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Mongodb</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Node</p>
         
        </div>
        <div className='flex p-2 gap-4'>
          <a href="#"><FaGithub size={30}/></a>
          <a href="https://glittering-beignet-7e6786.netlify.app" target='_blank'><CiLink size={30} /></a>
        </div>

      </div>
      <img src={wordabbrevation} alt="belsoft" className='w-[90%] mx-auto rounded-lg sm:w-[620px]' />
      </div>
     
      {/* started */}
      <div className='sm:gird sm:grid-cols-2 w-full p-2 gap-5 sm:flex'>
      <div className='flex flex-col mb-10 gap-2 w-[95%] mx-auto bg-gray-400 p-2 text-gray-900 rounded-lg '>
        <p className='text-2xl text-gray-600'>Personal Project </p>
        <h2 className='text-3xl font-bold text-gray-600'>Task Manager</h2>
        <p>
        I built a sleek and efficient Task Manager application using Tailwind CSS and Vite. This app enables users to organize their tasks effectively, providing a clean and responsive interface that enhances productivity.
        </p>
        <div className='flex justify-between p-2 text-gray-600'>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>react.js</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Tailwind</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Mongodb</p>
          <p className='p-2 border-gray-600 border rounded-xl px-2'>Node</p>
         
        </div>
        <div className='flex p-2 gap-4'>
          <a href="#"><FaGithub size={30}/></a>
          <a href="#" target='_blank'><CiLink size={30} /></a>
        </div>

      </div>
      <img src={taskmgr} alt="belsoft" className='w-[90%] mx-auto rounded-lg sm:w-[1200px] sm:h-[300px]' />
      </div>
     
     </section>
     {/* LAST SECTION */}
     <section id='contact' className='flex flex-col gap-4  w-[90%] h-screen justify-between items-center mx-auto '>
      <div className='flex flex-col gap-3 justify-center items-center'>
      <p><span className='font-bold text-xl '>-</span> MY CONTACT</p>
      <h2 className='text-3xl text-blue-900  font-semibold'>SEND A MESSAGE</h2>
      </div>
      

      <div className='flex flex-col justify-center items-center gap-4   '>
        <h2 className='font-semibold text-4xl text-blue-900  '>Get In Touch</h2>
        <p className='mx-auto text-gray-400 text-center'>I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question, want to collaborate on a project or just want to say hi, I'll definitely get back to you!</p>
        <a href='mailto:abayomiaremo0@gmail.com' className='px-6 py-2 border-2 border-gray-400 text-blue-900 font-bold rounded-lg shadow-lg'>Say Hello</a>
      </div>
      <div className=' flex flex-col gap-2 items-center justify-center'>
      <div className='flex m-4 gap-3 justify-center items-center'>
          <a href="#"><FaGithub size={25}/></a>
          <a href="#"><FaXTwitter size={25} /></a>
          <a href="www.linkedin.com/in/abayomi-aremo"><CiLinkedin size={25}/></a>
          <a href="#"><MdOutlineMailOutline size={25} /></a>

        </div>
        <a href="mailto:abayomiaremo0@gmail.com" className='flex gap-2'><MdOutlineMailOutline size={25} />abayomiaremo0@gmail.com</a>
        <p >© 2024 - Abayomi Aremo</p>
      </div>
      
     </section>
     <h3 className='mx-auto font-bold text-3xl'>AJ</h3>
    </div>
  )
}

export default App
