import React, { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

function CourceCard({ item, index }) {
    const [isHovered, setIsHovered] = useState(null)

    return (
        <>
            {/* <div className={`m-[15px] lg:m-0 p-[30px] rounded-lg shadow-xl`} onMouseOver={() => setIsHovered(index)} onMouseOut={() => setIsHovered(null)}>
            
            <div className=' text-[22px] h2-title font-bold text-center text-[#1980FA]'>
            {item.price}</div>
            </div> */}
            <div class="relative shadow-lg bg-white rounded-3xl m-5 lg:m-0">
                <div class="ribbon ribbon-top-left"><span>{item.noOfClasses} Classes</span></div>
                <img src={item.img} alt="" className={`m-auto h-[200px] w-full duration-500 text-center ${isHovered == index ? 'scale-125' : ''}`} />
                <div className='p-4'>
                    <div className={`text-lg p-subtitle text-center mb-2`}>
                        {item.title}
                    </div>
                    <div className='text-center font-normal'>Curriculum Includes</div>
                    <div className=' text-xs opacity-80'>Sequence, Fundamentals Coding Blocks, Loops</div>
                    <div className='text-center font-semibold text-2xl my-4'>₹{item.price}/-</div>
                    <div className='flex justify-center gap-2 border rounded py-3 pointer shadow-md text-[#FF9C58] mb-4 cursor-pointer'>
                        <div className='my-auto'>
                            View Details
                        </div>
                        <img
                            className='w-10'
                            src="data:image/png;base64,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" alt="" srcset="" />
                    </div>
                    <div className='flex justify-center gap-2 border rounded py-2 pointer shadow-md text-[#FF9C58] cursor-pointer'>
                        <FaRegCalendarAlt className='text-xl' />
                        <div className='my-auto font-semibold'>
                            Book Free Trial
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourceCard
