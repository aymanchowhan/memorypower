import React, { useState } from 'react';
import bgImg from '../assets/images/heroImg.png';
import { MdCalendarMonth } from 'react-icons/md';

function Hero() {
    const [isChecked, setIsChecked] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isSelected, setIsSeleceted] = useState(null)
    const classes = [
        { class: <div className='text-center'>Class<br />1</div> },
        { class: <div className='text-center'>Class<br />2</div> },
        { class: <div className='text-center'>Class<br />3</div> },
        { class: <div className='text-center'>Class<br />4</div> },
        { class: <div className='text-center'>Class<br />5</div> },
        { class: <div className='text-center'>Class<br />6</div> },
        { class: <div className='text-center'>Class<br />7</div> },
        { class: <div className='text-center'>Class<br />8</div> },
        { class: <div className='text-center'>Class<br />9</div> },
        { class: <div className='text-center'>Class<br />10</div> },
        { class: <div className='text-center'>Class<br />11</div> },
        { class: <div className='text-center'>Class<br />12</div> },
    ];

    const handleToggle = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <div className="bg-[url('https://memorypower.rabsconnect.in/static/media/slide_new.8ae66a0686ac50456938.png')] bg-no-repeat bg-contain w-full">
            <div id='home' className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 pt-52 container mx-auto'>
                <div className=' text-black py-10 px-5 lg:px-0 lg:pl-[20vh]'>
                    <div className='font-bold  text-center text-[24px] '>
                        Online Education Courses
                    </div>
                    <div style={{ fontSize: '18px' }} className=" leading-8 mb-[40px] text-center ">
                        "For Everyone"
                    </div>
                    <div className='mb-[50px]'>
                        <div className="text-center lg:text-left">
                            <div className="p-6 rounded-2xl shadow-lg bg-white">
                                <h2 className="text-lg font-semibold mb-2 text-center">Book your free class now</h2>
                                <div className="flex items-center justify-center mb-2">
                                    <span className="font-medium mr-3">For Kids</span>
                                    <label className={`inline-flex items-center cursor-pointer ${isDisabled ? 'opacity-50 cursor-pointer' : ''}`}>
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                            checked={isChecked}
                                            onChange={() => setIsChecked(!isChecked)}
                                            onClick={handleToggle}
                                        />
                                        <div className={`relative w-11 h-6 ${isDisabled ? 'bg-gray-400' : 'bg-gray-200'} rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6CC5FF]`}></div>
                                    </label>
                                    <span className="ml-3">For Adults (18+)</span>
                                </div>
                                <div className='text-center mb-3'>Select your child's grade/class in school</div>
                                <div className="grid grid-cols-6 mb-4">
                                    {classes.map((item, index) => (
                                        <button
                                            key={index}
                                            className={`${isSelected == index ? 'bg-[#FF8D1A]' : 'bg-transparent'} py-1 border border-gray-300 text-center hover:bg-[#FF8D1A]`}
                                            onClick={() => setIsSeleceted(index)}
                                            disabled={isDisabled}
                                        >
                                            {item.class}
                                        </button>
                                    ))}
                                </div>

                                <button className="px-10 py-2 bg-[#95BC17] text-white rounded w-full flex items-center justify-center hover:bg-[#1565C0] duration-500" >
                                    <MdCalendarMonth className="mr-2" />
                                    Schedule a FREE Class
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bgImg} alt="Hero Background" className='mx-auto' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
