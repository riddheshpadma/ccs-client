import React from 'react'
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import hero1 from '../assets/img/hero1.webp'
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineDiscord } from "react-icons/ai";
const ContactUs = () => {
  return (
    <React.Fragment>

      <section id='contact' className='text-black '>
        <div className='flex flex-col items-center justify-center h-1/2 bg-primaryColor text-white py-28 px-5'>
          <h1 className='text-3xl md:text-6xl font-bold mb-6'>Lets work together!</h1>
          <p className='text-sm md:text-xl max-w-2xl text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed ullam alias, veniam placeat voluptas unde cum excepturi repellat commodi.</p>

          <Link to='/getstarted'>
            <button
              class="py-4 px-10 bg-white hover:bg-tirtaryColor text-primaryColor hover:text-white ease-in-out duration-1000 text-sm md:text-xl "
            >
              Lets Start Project
            </button>
          </Link>

        </div>

        <div className='px-10 py-24 lg:py-40'>

          <div className='secContainer'>
            <div className='subHeadSec'>
              <span>Connect Us</span>
            </div>
            <div className='flex-1'>
              <div className='max-w-3xl'>
                <h1 className='heading'>Just Say Hello!</h1>
              </div>
              <div className='md:w-3/4 py-10'>
                <img src={hero1} alt="" className='rounded-2xl' />
              </div>
              <div className="max-w-3xl">
                <div>
                  <div>
                    <h3 className="text-4xl font-semibold mb-2">Get in Touch</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                  <div>

                    <p className="text-lg mb-4">Want to know more about us, have a project in mind? Drop us a line and we will get back as soon as possible.</p>
                  </div>

                </div>
                <div>
                  <ContactForm />
                  <div className='flex justify-center items-center p-10 mt-5'>
                    <ul className='flex justify-around w-full'>
                      <li>
                        <div className="group relative inline-block">
                          <button class="focus:outline-none">
                            <LuLinkedin size={36} className="btnSocial" />
                          </button>
                          <span
                            className='btnSpan'
                          >LinkedIn</span>
                        </div>
                      </li>
                      <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <RiTwitterXFill size={36} className="btnSocial" />
                          </button>
                          <span
                            className='btnSpan'
                          >X</span>
                        </div>
                      </li>
                      {/* <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <LuGithub size={36} className="btnSocial" />
                          </button>
                          <span
                            className='btnSpan'
                          >Github</span>
                        </div>
                      </li> */}
                      <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <BsInstagram size={36} className="btnSocial" />
                          </button>
                          <span
                            className="btnSpan"
                          >Instagram</span>
                        </div>
                      </li>
                      {/* <li>
                        <div class="group relative inline-block">
                          <button class="focus:outline-none">
                            <AiOutlineDiscord size={36} className="btnSocial" />
                          </button>
                          <span
                            className="btnSpan"
                          >Discord</span>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  <div className='mt-28'>
                    <ul className="flex flex-col justify-center items-center space-y-2">
                      <li>
                        {/* <span className="font-semibold mr-2">Email:</span> */}
                        <a href="mailto:hello@example.com" className="text-primary hover:underline">
                          chakracodeservices@gmail.com
                        </a>
                      </li>
                      <li>
                        {/* <span className="font-semibold mr-2">Phone:</span> */}
                        <a href="tel:+123456789" className="text-primary hover:underline">
                          +91 922640 6267
                        </a>
                      </li>
                      <li className='flex justify-center'>
                        {/* <span className="font-semibold mr-2">Location:</span> */}
                        <span>Solapur-413006, Bharat</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className='flex justify-center items-center py-10'>
        <p className="text-sm">&copy; 2025 riddheshpadma.dev . All rights reserved.</p>
      </div>
    </React.Fragment>
  )
}

export default ContactUs