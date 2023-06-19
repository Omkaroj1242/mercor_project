import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import profile from '../assets/profile-img.png'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Calendar2} from 'iconsax-react'
import { MessageQuestion } from 'iconsax-react'
import { Notification } from 'iconsax-react'

const Navbar = () => {
    return (
        <>
            <nav className='col-span-4 ml-[20%] h-20 border-b text-[#787486]'>
                <div className='h-[100%] flex flex-row justify-between mx-10 items-center'>
                    <div className='bg-[#F5F5F5] p-2 rounded-lg'>
                        <FontAwesomeIcon className='mx-5' icon={faMagnifyingGlass} />
                        <input className='border-0 bg-[#F5F5F5]' type='text' placeholder='Search for anything...' />
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row justify-around align-center mx-5' >
                            <Calendar2 className='mx-3 cursor-pointer' />
                            <MessageQuestion className='mx-3 cursor-pointer' />
                            <Notification className='mx-3 cursor-pointer' />
                        </div>
                        <div className='flex flex-row items-center'>
                            <div className='mx-3'>
                                <span className='text-black font-normal text-base cursor-pointer'>Anima Agrawal</span>
                                <p>U.P. India</p>
                            </div>
                            <div className='mx-3'>
                                <img className='max-h-10 rounded-full cursor-pointer' src={profile} />
                            </div>
                            <div className='mx-2'>
                                <FontAwesomeIcon className='cursor-pointer' icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar