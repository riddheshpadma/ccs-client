import React from 'react'
import Navbar from '../../components/Navbar'

import HeroBg from '../../assets/img/services/service.jpg'
import Illustration1 from '../../assets/img/services/illustration1.svg'
import Illustration2 from '../../assets/img/services/illustration2.svg'
import Illustration3 from '../../assets/img/services/illustration3.svg'
import Services from '../../components/ServicesSlider'
import ContactUs from '../../components/ContactUs'
import HeroSec from '../../template/HeroSec'

const index = () => {
    return (
        <div>

            <section>
                <HeroSec head="Services" subhead="Empowering your digital presence with top-notch solutions." />
            </section>

            <section className=''>
                <div className='flex flex-col items-center justify-center h-screen bg-primaryColor'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl md:text-5xl font-bold text-white'>Our Working Process</h1>
                        <p className='text-sm md:text-lg text-white text-center mt-4'>We use use best practices and cutting-edge technology to deliver <br /> high-quality solutions that meet your business needs.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center p-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Illustration1} alt="" />
                        <div className='relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14'>
                            <div className='absolute py-4 px-6 rounded-full bg-[#cacf82]'>1</div>
                        </div>
                        <div className='flex flex-col items-center justify-center p-4 mt-10 '>
                            <h1 className='text-xl md:text-2xl font-bold'>Initiation & Planning</h1>
                            <p className='text-lg text-gray-400 text-center'>We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Illustration2} alt="" />
                        <div className='relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14'>
                            <div className='absolute py-4 px-6 rounded-full bg-[#cacf82]'>2</div>
                        </div>
                        <div className='flex flex-col items-center justify-center p-4 mt-10 '>
                            <h1 className='text-xl md:text-2xl font-bold'>Execution & Development</h1>
                            <p className='text-lg text-gray-400 text-center'>We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Illustration1} alt="" />
                        <div className='relative flex items-center justify-center overflow-visible border-2 border-dashed border-black w-full mt-14'>
                            <div className='absolute py-4 px-6 rounded-full bg-[#cacf82]'>3</div>
                        </div>
                        <div className='flex flex-col items-center justify-center p-4 mt-10 '>
                            <h1 className='text-xl md:text-2xl font-bold'>Testing & Maintenance</h1>
                            <p className='text-lg text-gray-400 text-center'>We are architects innovation trailblazers of technological advancement</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-col items-center justify-center h-screen bg-primaryColor'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl md:text-5xl font-bold text-white'>Our Services</h1>
                        <p className='text-sm md:text-lg text-white'>We offer a wide range of services to help you</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='container flex flex-col justify-center items-center'>
                        <Services />
                    </div>
                </div>
            </section>


            <section>
                <ContactUs />
            </section>
        </div>
    )
}

export default index;
