import React from 'react'
import { GoPlay } from 'react-icons/go';
import { LuCalendarCheck } from 'react-icons/lu';

function About() {
    return (
        <>
            <div className="bg-[url('https://memorypower.rabsconnect.in/static/media/bg.8331f4de14d09f69fcc2.png')] bg-contain w-full">
                <div id='about' className=' py-[100px] px-[50px]'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 container m-auto">
                        <div className='relative'>
                            <img src={'https://memorypower.rabsconnect.in/static/media/lefticon.7882513e40ad07e235bf.png'} alt="" srcset="" className='m-auto scale-75' />
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-4xl text-lg leading-loose text-white'>Memory Power <br />Management <br />Team</div>
                        </div>
                        <div className='h-full flex flex-col'>
                            <div className='lg:w-[80%] text-center text-white m-auto text-lg mb-28 lg:mb-auto'>
                                Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood experts. <br /> <br />
                                Memory power follows a rigorous 4-step Selection Process for confirming teacher candidates so your childern are taught by the top early childhood experts.
                            </div>
                            <div className='flex justify-center gap-2 border bg-white w-[220px] mx-auto rounded py-3 pointer shadow-md text-[#FF9C58] mb-4 cursor-pointer font-semibold'>
                                <GoPlay className='my-auto text-2xl' />
                                <div className='my-auto'>
                                    Live Comments
                                </div>
                            </div>
                            <div className='flex justify-center gap-2 border bg-white w-[220px] mx-auto rounded py-3 pointer shadow-md text-[#FF9C58] mb-4 cursor-pointer font-semibold'>
                                <LuCalendarCheck className='my-auto text-2xl' />
                                <div className='my-auto'>
                                    Book Free Trial
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FF9B56]'>
                <div className='container m-auto flex lg:flex-row flex-col justify-between px-10 py-4'>
                    <div className='text-white my-auto lg:text-2xl text-lg mb-4 lg:mb-0 text-center lg:text-left'>
                    Memory Power is the top coding learning platform for young minds:
                    </div>
                    <div className='flex justify-center gap-2 border bg-white w-[220px] mx-auto lg:mx-0 rounded py-3 pointer shadow-md text-[#FF9C58] cursor-pointer font-semibold'>
                        <LuCalendarCheck className='my-auto text-2xl' />
                        <div className='my-auto'>
                            Book Free Trial
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
