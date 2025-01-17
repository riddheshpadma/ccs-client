import React from 'react'
import { Link } from 'react-router-dom';

// Components import
import { Navbar } from '../../components/Navbar';
import { BottomNavbar } from '../../components/BottomNavbar';

import '../../style/home.css'

// Images Imports
import hero1 from '../../assets/img/hero1.webp'
import ServiceSec from '../../assets/img/services/servicesechome.jpg'
import HeroBg from '../../assets/img/backgroundhome.jpg'



// Icons Import

import html from '../../assets/img/skills/html.png'
import css from '../../assets/img/skills/css.png'
import git from '../../assets/img/skills/git.png'
import express from '../../assets/img/skills/express.png'
import java from '../../assets/img/skills/java.png'
import js from '../../assets/img/skills/js.png'
import mongodb from '../../assets/img/skills/mongodb.png'
import mysql from '../../assets/img/skills/mysql.png'
import python from '../../assets/img/skills/python.png'
import nodejs from '../../assets/img/skills/nodejs.png'
import react from '../../assets/img/skills/react.png'
import bootstrap from '../../assets/img/skills/bootstrap.png'
import github from '../../assets/img/skills/github.png'
import tailwind from '../../assets/img/skills/tailwind.png'

import ContactUs from '../../components/ContactUs';



export const index = () => {
  return (
    <div className='flex flex-col'>
      {/* Menu Bars */}
      <Navbar />
      <BottomNavbar />

      {/* Hero Section Starts */}
      <section id='home' className='relative  text-black'
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-55 z-0 shadow-2xl shadow-gray-500'></div>
        <div className='relative z-10 min-h-screen align-middle  overflow-hidden text-white'>
          <div className='absolute z-10 md:left-40 lg:left-[64] md:right-40 lg:right-[64] lg:top-28 p-10'>
            <div className='py-5 px-5 rounded-3xl mt-28'>
              <h1 className='text-4xl font-bold sm:font-normal sm:text-6xl md:text-7xl lg:text-8xl '>Building Digital Brilliance.</h1>
              <p className='text-md md:text-2xl mt-4 md:mt-6 mb-6'>Empowering businesses with innovative tech solutions. <br /> Creativity meets technology at CCS.</p>
              <Link to='/getstarted'>
                <button className='py-2 md:py-4 px-4 md:px-10 bg-primaryColor hover:bg-tirtaryColor text-white ease-in-out duration-1000 text-base md:text-xl'>Lets Grow Together</button>
              </Link>

            </div>
          </div>
          {/* <div className='absolute -z-10 right-[-200px] md:right-[-100px] top-[-150px] md:top-[-50px]'>
            <img src={stone1} alt="" className='' />
          </div>
          <div className='absolute -z-10 left-[-300px] md:left-[-200px] bottom-[-100px] md:bottom-[-50px]'>
            <img src={stone2} alt="" />
          </div> */}
        </div>
      </section >
      {/* Hero section ends */}

      {/* Services Section Starts */}
      <section id='services' className='text-black px-10 py-24 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>Services</span>
          </div>
          <div className='flex-1'>
            <div className='lg:mb-14'>
              <h1 className='heading'>Innovate. Design. Deliver.</h1>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
              <div className='flex-1'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, possimus autem perspiciatis nam qui consequuntur sed corrupti, eveniet cupiditate numquam maiores facere laudantium dolorum explicabo dolor officia. Temporibus necessitatibus officia ab iusto aperiam, distinctio rem laudantium quos nesciunt, assumenda ipsum.</p>
              </div>
              <div className='flex flex-1 max-w-md  items-center justify-start p-10 text-white'>
                <Link to="/services">
                  <button className='md:ml-10 py-3 px-10 bg-[#2a2a2a] hover:bg-black ease-in-out duration-1000 text-base md:text-xl'>Know More</button>
                </Link>
              </div>
            </div>
            <div className='max-w-4xl mt-16 rounded-3xl overflow-hidden shadow-2xl shadow-gray-500 '>
              <img src={ServiceSec} alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* Services section ends */}

      {/* About Us Section Starts */}
      <section id='aboutus' className='text-black px-10 py-24 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>About Us</span>
          </div>
          <div className='flex-1'>
            <div className='max-w-3xl'>
              <h1 className='heading'>Aproach and Philosophy</h1>
            </div>
            <div className='md:w-3/4 py-10'>
              <img src={hero1} alt="" className='rounded-2xl' />
            </div>
            <div className='flex flex-col md:flex-col md:w-3/4'>
              <div className='p-5 md:p-0'>
                <p className='md:pr-20 mb-4 text-sm'>At <span className='font-bold'>Padma Sphere Services</span > we are passionate about turning ideas into reality through innovative technology solutions. Founded with the vision to empower businesses, we specialize in delivering high-quality software and application development services that cater to diverse needs, whether you’re a startup seeking to make your mark or an established organization aiming to enhance your digital presence. <br /> Our team comprises talented developers, designers, and strategists committed to crafting tailored solutions. From web and mobile applications to intuitive UI/UX designs, we prioritize user-centric approaches and cutting-edge technologies to ensure your business achieves its goals effectively. </p>
                <p className='md:pr-20 text-sm  mb-8 '>Our mission is to help businesses succeed by leveraging technology, creating meaningful experiences for users, and fostering growth. With a focus on transparency and collaboration, we aim to build lasting relationships with our clients.
                </p>
                {/* <button className='py-6 px-14 border-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-[1.2]'>Download CV</button> */}
              </div>
              <div className='flex flex-col md:justify-start md:items-start p-5 md:p-0 min-w-64'>
                <h3 className='text-3xl font-bold'>Why choose us?</h3>
                <ul className='space-y-6 pl-4 mt-4'>
                  <li><span className='font-bold'>Client-Centric Approach:</span> Your vision is at the core of everything we do.</li>
                  <li><span className='font-bold'>Expert Team:</span> A dedicated team with expertise across various domains and technologies.</li>
                  <li><span className='font-bold'>End-to-End Solutions:</span> From ideation to execution and beyond, we cover it all.</li>
                  <li><span className='font-bold'>Innovation & Quality:</span> We thrive on creativity and deliver products with uncompromised quality.</li>
                </ul>
                <p className='mt-10 font-extrabold text-xl'>Let’s shape the future together.</p>
                <p className='font-bold mt-4'>Chakra Code Services – Transforming ideas into impactful solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us section ends */}

      {/* Technologies Section starts */}
      <section id='technologies' className='text-black px-10 py-24 lg:py-40'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <p>Technologies</p>
          </div>
          <div className='flex 1'>
            <div>
              <div>
                <h1 className='heading'>Tech Stack</h1>
                <div className='py-16' >
                  <ul className='grid grid-cols-5 gap-4 gap-y-14'>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={html} alt="" /></li>
                      <span
                        className='skillSpan'
                      >HTML5</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={bootstrap} alt="" /></li>
                      <span
                        className='skillSpan'
                      >BOOTSTRAP</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={tailwind} alt="" /></li>
                      <span
                        className='skillSpan'
                      >TAILWIND</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={css} alt="" /></li>
                      <span
                        className='skillSpan'
                      >CSS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={js} alt="" /></li>
                      <span
                        className='skillSpan'
                      >JAVASCRIPT</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={react} alt="" /></li>
                      <span
                        className='skillSpan'
                      >React.JS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={nodejs} alt="" /></li>
                      <span
                        className='skillSpan'
                      >Node.JS</span>
                    </div>

                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={express} alt="" /></li>
                      <span
                        className='skillSpan'
                      >Express.JS</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={java} alt="" /></li>
                      <span
                        className='skillSpan'
                      >JAVA</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={python} alt="" /></li>
                      <span
                        className='skillSpan'
                      >PYTHON</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={mongodb} alt="" /></li>
                      <span
                        className='skillSpan'
                      >MONGODB</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={mysql} alt="" /></li>
                      <span
                        className='skillSpan'
                      >MySQL</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={git} alt="" /></li>
                      <span
                        className='skillSpan'
                      >GIT</span>
                    </div>
                    <div className="group relative inline-block">
                      <li className='skillIcon'><img src={github} alt="" /></li>
                      <span
                        className='skillSpan'
                      >GITHUB</span>
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className='text-3xl mb-4'>What We Do Best?</h1>
                <p className='max-w-2xl'>As a dedicated and skilled team, we excel in creating dynamic and responsive applications. Our expertise spans across various technologies and methodologies, enabling we to deliver high-quality solutions tailored to meet the unique needs of each project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies section ends */}

      {/* Contact Us section starts */}

      <ContactUs />
    </div >
  )
}
export default index;