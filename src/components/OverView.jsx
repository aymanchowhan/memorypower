import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
export const OverView = () => {

    const [tab, setTab] = useState('overview')
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        'https://memorypower.rabsconnect.in/static/media/Mask%20Group1.6d2daf4722051871ddf3.png',
        'https://memorypower.rabsconnect.in/static/media/Mask%20Group2.cab2e7a4c4c0f2985f9c.png',
        'https://memorypower.rabsconnect.in/static/media/Mask%20Group3.38ab955aedd836af2992.png'
    ]



    const swiperRef = useRef(null);

    const handleThumbnailClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };


    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.on('slideChange', () => {
                setActiveIndex(swiperInstance.realIndex);
            });
        }
    }, []);


    return (
        <div className="bg-gradient-to-t to-[#E4F4F6] via-[#E4F4F6] from-transparent">
            <div className='container m-auto lg:py-[100px] lg:px-[50px] px-5 py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className='relative h-full flex flex-col order-2 lg:order-1 mt-10 lg:mt-0'>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: '#prev',
                                nextEl: '#next',
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper m-auto lg:w-[80%] w-[92%] relative">
                            <div id='prev' className='absolute z-10 h-full w-10 hover:bg-[#00000050] text-white text-opacity-50 hover:text-opacity-100 hover:opacity-100 left-0 top-0 bottom-0 duration-500 cursor-pointer'>
                                <AiFillCaretLeft className='absolute top-1/2 text-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                            </div>
                            <div id='next' className='absolute z-10 h-full w-10 hover:bg-[#00000050] text-white text-opacity-50 hover:text-opacity-100 hover:opacity-100 right-0 top-0 bottom-0 duration-500 cursor-pointer'>
                                <AiFillCaretRight className='absolute top-1/2 text-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                            </div>
                            {
                                data.map((item, i) => (
                                    <SwiperSlide>
                                        <img src={item} alt="" srcset="" />
                                    </SwiperSlide>

                                ))}
                        </Swiper>

                        <div className='flex justify-center gap-2'>
                            {
                                data.map((item, i) => (
                                    <div key={i} onClick={() => handleThumbnailClick(i)} className={`${activeIndex === i ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500  rounded-lg overflow-hidden cursor-pointer border p-[2px]`}>
                                        <img src={item} alt="" srcset="" className='h-16 w-24' />
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>

                    <div className='order-1 lg:order-2'>
                        <div className={`flex container lg:mt-[30px] border-b-[1px]`}>
                            <div onClick={() => setTab('overview')} className={`${tab === 'overview' ? 'border-b-4 border-blue-500 text-blue-500' : 'border-b text-[#1D1C1D70]'} duration-400  cursor-pointer px-5 lg:px-0 lg:min-w-[179px] text-center lg:pb-3 pb-2 text-xl`}>Overview</div>
                            <div onClick={() => setTab('vision')} className={`${tab === 'vision' ? 'border-b-4 border-blue-500 text-blue-500' : 'border-b text-[#1D1C1D70]'} duration-400  cursor-pointer px-5 lg:px-0 lg:min-w-[179px] text-center lg:pb-3 pb-2 text-xl`}>Our Vision </div>
                        </div>
                        <div className='mt-4 text-lg'>
                            {
                                tab === 'overview' ?
                                    <div>
                                        “THE MEMORY POWER” is an EdTech startup company that equips students with the skillset and mindset required to be the future of the companies worldwide. We connect a deep understanding of education with the power of the “21st CENTURY LIFE SKILLS” to make your child ready to face this competitive and challenging world. <br /><br />
                                        The universe is a subject created in the minds of humans addressed by the facts and theories since centuries. To think about it in detail requires the strength of knowledge and experience which are used to lead an intellectual life.
                                    </div>
                                    :
                                    <div>
                                        To help your child enhance the understanding of life based on the core concept of the most powerful tool in the world - “THE MEMORY POWER”. <br /> <br />
                                        “Memory Power” is an art of practicing the life skills that will provide your children with the important tools for the development of brain, such as deep thinking, making new friends, decision making and taking actions in situations where their parents or teachers are not around to help.</div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
