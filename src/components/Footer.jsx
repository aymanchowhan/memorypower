import React, { useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { MdOutlineVerified } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { GiMedal } from 'react-icons/gi';
import { RiGraduationCapFill } from 'react-icons/ri';
import { GrGallery } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLink } from 'react-icons/io5';
import { RiShareBoxLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

function Footer() {
  const [hoveredQuickLink, setHoveredQuickLink] = useState(null);
  const [hoveredSupportLink, setHoveredSupportLink] = useState(null);
  const [hoveredExtraLink, setHoveredExtraLink] = useState(null);

  const QuickLinks = [
    { icon: <IoHome />, title: 'Home', link: '/' },
    { icon: <MdOutlineVerified />, title: 'About Us', link: '/' },
    { icon: <BsStars />, title: 'Meet Founder', link: '/' },
    { icon: <GiMedal />, title: 'Our Certificates', link: '/' },
    { icon: <RiGraduationCapFill />, title: 'Courses', link: '/' },
    { icon: <GrGallery />, title: 'Gallery', link: '/' },
    { icon: <FaPhoneAlt />, title: 'Contact Us', link: '/' },
  ];

  const supportLinks = [
    { title: 'Careers', link: '/' },
    { title: 'Teacher Login', link: '/' },
    { title: 'Student Login', link: '/' },
    { title: 'Register Now', link: '/' },
    { title: 'Terms & Conditions', link: '/' },
    { title: 'Privacy Policy', link: '/' },
  ];

  const extraLinks = [
    { title: 'Helpdesk', link: '/' },
    { title: 'Complaint Redressal', link: '/' },
    { title: 'Apply for Teacher Role', link: '/' },
    { title: 'Help desk', link: '/' },
  ];

  const SocialLinks = [
    { iconl: <FaFacebookF />, link: '/' },
    { iconl: <GrTwitter />, link: '/' },
    { iconl: <FaLinkedinIn />, link: '/' },
  ];

  return (
    <footer id='contact' className='relative'>
      <div className="bg-[url('https://memorypower.rabsconnect.in/static/media/footer.5b776655724537b6b8ce.png')] bg-cover w-full bg-no-repeat">
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 container m-auto text-white px-10 py-[80px] '>
          <div className='lg:col-span-2'>
            <img src={logo} alt='logo' />
            <div className='p-subtitle text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <button className='mt-4 px-4 py-2 bg-green-600 hover:bg-blue-500 text-white rounded duration-700'>Read More</button>
            <div className='flex mt-4 gap-4 justify-center lg:justify-start'>
              {SocialLinks.map((item, i) => (
                <div key={i} className='text-lg hover:text-[#576EA0] cursor-pointer duration-500'>
                  {item.iconl}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='h2-title text-left text-[22px] mb-[10px]'>
              <IoLink className='inline-block mr-2' />
              Important Links
            </div>
            <div className='border border-white mt-0 mb-2' ></div>
            {QuickLinks.map((item, i) => (
              <div key={i} className='p-2 hover:bg-[#00000015] p-subtitle mb-[10px] flex cursor-pointer justify-items-center justify-start gap-2'>
                <div className='my-auto text-2xl'>
                  {item.icon}
                </div>
                <div className="my-auto">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='h2-title text-left text-[22px] mb-[10px]'>
              <IoLink className='inline-block mr-2' />
              More Links
            </div>
            <div className='border border-white mt-0 mb-2' ></div>
            {supportLinks.map((item, i) => (
              <div key={i} onMouseOver={() => setHoveredSupportLink(i)} onMouseOut={() => setHoveredSupportLink(null)} className='p-2 hover:bg-[#00000015] p-subtitle mb-[10px] flex cursor-pointer justify-items-center justify-start gap-2'>
                <div className='my-auto text-2xl'>
                  <RiShareBoxLine />
                </div>
                <div className="my-auto">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='h2-title text-[22px] mb-[20px] text-left invisible'>
              Extra Links
            </div>
            {extraLinks.map((item, i) => (
              <div key={i} onMouseOver={() => setHoveredSupportLink(i)} onMouseOut={() => setHoveredSupportLink(null)} className='p-2 hover:bg-[#00000015] p-subtitle mb-[10px] flex cursor-pointer justify-items-center justify-start gap-2'>
              <div className='my-auto text-2xl'>
                <RiShareBoxLine />
              </div>
              <div className="my-auto">
                {item.title}
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='text-center p-subtitle text-white pb-[80px]'>
          Copyright &copy; MemoryPower {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
