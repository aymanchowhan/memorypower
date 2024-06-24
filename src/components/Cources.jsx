import React, { useEffect, useState } from 'react'
import "swiper/css";

import CourceCard from './Cards/CourceCard';



function Cources() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/cources.json')
            .then(response => response.json())
            .then(data => setData(data?.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div id='Cources' className='container mx-auto pt-[150px] pb-[70px] lg:px-40'>
            
            <div className='text-center text-[34px] text-[#0f1d46] mb-10'>Our Courses
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-1">
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <CourceCard item={item} index={index} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Cources
