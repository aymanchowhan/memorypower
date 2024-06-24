import React from 'react';
import logics from '../assets/images/logivs.png';
import structure from '../assets/images/structure.png';
import thinking from '../assets/images/thinking.png';
import sequencing from '../assets/images/sequencing.png';
import algo from '../assets/images/algothinking.png';
function Pinkcontent() {
  const data=[
    {
      img:logics,
      title:'Logics'
    },
    {
      img:structure,
      title:'Structure'
    },
    {
      img:thinking,
      title:'Creative Thinking'
    },
    {
      img:sequencing,
      title:'Sequencing'
    },
    {
      img:algo,
      title:'Algorithmic Thinking'
    },
    
  ]
  return (
    <div className="bg-[url('https://memorypower.rabsconnect.in/static/media/learning.9a74cd993a1149f29e99.png')] bg-cover w-full bg-no-repeat bg-center">
      <div className='container mx-auto pt-[50px] pb-[70px]'>

        <div className='text-center text-[34px] mb-2 text-white'>
          Your child will learn
        </div>
        <div className='h-[1px] w-1/2 mx-auto bg-opacity-40 bg-white mb-3 ' />
        <div className='text-center text-white'>The Memory power that good questions drive good answers. Whether it's a query about the world around us or a challenge.</div>
        <div className="mt-4 grid lg:grid-cols-5 grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#445A89] rounded-full w-20 h-20 pt-[14px] hover:scale-110 duration-500 cursor-pointer mx-auto ">
                <img src={item.img} alt={item.title} className="mx-auto  h-10 w-10" />
              </div>
                <div className="text-lg  mt-2 text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pinkcontent;
