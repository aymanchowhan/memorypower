import React from 'react';
import img from '../assets/images/offer-card-1.f2b03082c0f269077018.png';

function Service() {
  const data = [
    {
      img: img,
      title: "Online Teaching",
      description: "With online learning programs, parents can teach their kids anytime and anywhere."
    },
    {
      img: img,
      title: "Live Classes",
      description: "Although live class ideas are already prevalent and established education business."
    },
    {
      img: img,
      title: "Trained Teachers",
      description: "Teaching is a passion and experts want to share their expertise outside of the institutional sphere"
    },
    {
      img: img,
      title: "Visual Concepts",
      description: "Learning by watching videos is better than reading long pages and bulky books."
    },
    {
      img: img,
      title: "Visual Concepts",
      description: "Learning by watching videos is better than reading long pages and bulky books."
    },
    {
      img: img,
      title: "Visual Concepts",
      description: "Learning by watching videos is better than reading long pages and bulky books."
    },
  ];

  return (
    <div className='container mx-auto pt-[50px] pb-[70px]'>
      <div className='text-center lg:text-[34px] text-[28px] text-[#0f1d46] mb-[50px]'>
        Services we offer ?
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-[78%] mx-auto gap-4  pb-10 text-center'>
        {data.map((item, index) => (
          <div key={index} className='lg:flex p-[30px] shadow-2xl rounded-2xl '>
            <div className='lg:w-1/3'>
              <img src={item.img} alt={item.title} className='lg:w-full h-auto' />
            </div>
            <div className='lg:w-2/3 lg:pl-[20px] flex flex-col justify-center'>
              <div className='text-[20px]  h2-title text-[#134B92] mb-[5px]'>
                {item.title}
              </div>
              <div className='text-[14px] text-base p-subtitle text-[#0F1D46] opacity-70 mb-1 '>
                {item.description}
              </div>
              <button className='mt-auto font-bold bg-[#95BC17] text-white py-2 px-3 rounded hover:bg-blue-700 text-[14px] lg:text-[16px]'>
                Book Free trial class
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-red-500'></div>
    </div>
  );
}

export default Service;
