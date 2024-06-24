import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose, IoLogoFacebook } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/logo.png'
import { FaCodeBranch, FaHome, FaInstagram, FaPhoneAlt, FaRegCalendarCheck, FaTwitter } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { RiGraduationCapFill } from 'react-icons/ri';

const navMenu = [
  {
    icon: <FaHome />,
    name: 'Home',
    path: '/'
  },
  {
    icon: <BsStars />,
    name: 'About',
    path: '/about'
  },
  {
    icon: <RiGraduationCapFill />,
    name: 'Cources',
    path: '/'
  },
  {
    icon: <FaPhoneAlt />,
    name: 'Contact',
    path: '/contact-us'
  },
]

const buttons = [
  {
    icon: <FaCodeBranch />,
    name: 'Join class',
    path: '/'
  },
  {
    icon: <FaRegCalendarCheck />,
    name: 'Book a free trial',
    path: '/'
  },
]

const socialMedia = [<IoLogoFacebook />, <FaInstagram />, <FaTwitter />]

function Header() {
  const [isHover, setIsHover] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-white shadow-md'>
      <div className='container m-auto relative'>
        <div className='flex justify-between text-white lg:px-10 px-5 text-[16px] py-4'>
          <div className='my-auto'>
            <img src={logo} alt="" className='w-[170px]' srcset="" />
          </div>
          <div className='my-auto flex'>
            <div className='cursor-pointer text-gray-800' onClick={() => setIsOpen(!isOpen)}>
              {
                isOpen ?
                  <RxHamburgerMenu className='lg:hidden text-3xl' />
                  :
                  <RxHamburgerMenu className='lg:hidden text-3xl' />
              }
            </div>
            <div className='hidden lg:block'>
              <div className='flex gap-2'>
                <div className='flex gap-2'>
                  {
                    navMenu.map((item, index) =>
                      <HashLink className='flex gap-2 hover:bg-[#6BC4FC30] rounded-lg text-[#6BC4FC] px-3 py-1'
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        to={item.path}>
                        <div className='my-auto'>
                          {item.icon}
                        </div>
                        <div className='relative hover:cursor-pointer my-auto' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                          {item.name}
                        </div>
                      </HashLink>
                    )
                  }
                </div>
                <div className='flex gap-2'>
                  {
                    buttons.map((item, index) =>
                      <HashLink className='flex gap-2 hover:bg-[#6BC4FC30] border border-[#FF9C58] rounded-md hover:border-blue-600 text-[#FF9C58] px-3 py-2'
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        to={item.path}>
                        <div className='my-auto'>
                          {item.icon}
                        </div>
                        <div className='relative hover:cursor-pointer ' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                          {item.name}
                        </div>
                      </HashLink>
                    )
                  }
                </div>
                <div className='flex gap-2'>
                  {
                    socialMedia.map((item, index) =>
                      <HashLink className='flex text-[#F994D3] text-2xl hover:bg-gray-100 p-2 h-fit rounded-full'
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        to={item.path}>
                        <div className='relative hover:cursor-pointer my-auto' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                          {item}
                        </div>
                      </HashLink>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className={`lg:hidden absolute duration-500 z-10 left-0 right-0 h-screen ${!isOpen ? '-translate-x-[100vh] bg-transparent' : 'translate-x-0 bg-black bg-opacity-50'}`}></div>
        <div onClick={() => setIsOpen(!isOpen)} className={`lg:hidden absolute duration-500 z-10 left-0 right-0 top-0 bottom-0 ${!isOpen ? '-translate-x-[100vh] bg-transparent' : 'translate-x-0 bg-black bg-opacity-50'}`}></div>

        <div className={`lg:hidden bg-white absolute duration-500 z-10 bottom-0 left-0 right-1/4 top-0 ${!isOpen ? '-translate-x-[100vh]' : 'translate-x-0'}`}>
          <div className='flex gap-3 h-full justify-center'>
            <img src="https://memorypower.rabsconnect.in/static/media/favicon.2b604ffcd1a6e4804945.ico" alt="" srcset="" className='my-auto w-12' />
            <div className="my-auto text-[#6BC4FC]">
              Memory Power
            </div>
          </div>
        </div>


        <div className={`lg:hidden bg-white fixed duration-500 h-screen z-10 left-0 right-1/4 ${!isOpen ? '-translate-x-[100vh]' : 'translate-x-0'}`}>
          <div className='gap-10'>
            {
              navMenu.map((item, index) =>
                <HashLink onClick={() => setIsOpen(false)}
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                  to={item.path}>
                  <div style={{ fontSize: '18px' }} className='border-t-[1px] relative cursor-pointer flex gap-2 text-[#FF9C58] hover:bg-gray-100 duration-500  py-4 pl-4'>
                    <div className='my-auto'>
                      {item.icon}
                    </div>
                    <div className='relative hover:cursor-pointer my-auto' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                      {item.name}
                    </div>
                  </div>
                </HashLink>
              )
            }
          </div>

          <div className='mt-[40%] border-t-[1px] pt-5'>
            {
              buttons.map((item, index) =>
                <HashLink className='mx-5 flex gap-2 hover:bg-[#6BC4FC30] border border-[#6BC4FC] rounded-md hover:border-blue-600 text-[#6BC4FC] px-3 py-2 mb-2'
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                  to={item.path}>
                  <div className='my-auto'>
                    {item.icon}
                  </div>
                  <div className='relative hover:cursor-pointer ' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                    {item.name}
                  </div>
                </HashLink>
              )
            }
            <div className="flex justify-center mt-4">
              {
                socialMedia.map((item, index) =>
                  <HashLink className='flex text-[#F994D3] text-3xl hover:bg-gray-100 p-2 h-fit rounded-full'
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    to={item.path}>
                    <div className='relative hover:cursor-pointer my-auto' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                      {item}
                    </div>
                  </HashLink>
                )
              }
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Header