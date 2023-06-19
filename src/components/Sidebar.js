import React from 'react'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Category, Message, TaskSquare, Profile2User, Setting2 } from 'iconsax-react'

const Sidebar = () => {
    return (
        <>
            <div className='text-[#787486] border-r w-[20%] row-span-2 absolute top-0 left-0'>
                <div className='h-20 px-5 flex border-b justify-between items-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z" fill="#5030E5" />
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#5030E5" />
                        <path opacity="0.4" d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z" fill="#5030E5" />
                    </svg>
                    <h2 className='font-semibold text-black grow px-2 cursor-pointer'>Project M.</h2>
                    <svg className='justity-self-end cursor-pointer' width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z" fill="#787486" />
                        <path d="M12.5 17.225C12.3417 17.225 12.1833 17.1667 12.0583 17.0417L6.62499 11.6083C5.74166 10.725 5.74166 9.27499 6.62499 8.39165L12.0583 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1833 3.19999 13.1833 3.59999 12.9417 3.84165L7.50833 9.27499C7.10833 9.67499 7.10833 10.325 7.50833 10.725L12.9417 16.1583C13.1833 16.4 13.1833 16.8 12.9417 17.0417C12.8167 17.1583 12.6583 17.225 12.5 17.225Z" fill="#787486" />
                    </svg>
                </div>
                <div className='mx-3 mb-10'>
                    <div className='border-b py-3'>
                        <div className='flex my-5'>
                            <Category className='mx-3 cursor-pointer' />
                            <h3 className='cursor-pointer'>Home</h3>
                        </div>
                        <div className='flex my-5'>
                            <Message className='mx-3 cursor-pointer' />
                            <h3 className='cursor-pointer'>Messages</h3>
                        </div>
                        <div className='flex my-5'>
                            <TaskSquare className='mx-3 cursor-pointer' />
                            <h3 className='cursor-pointer'>Tasks</h3>
                        </div>
                        <div className='flex my-5'>
                            <Profile2User className='mx-3 cursor-pointer' />
                            <h3 className='cursor-pointer'>Members</h3>
                        </div>
                        <div className='flex my-5'>
                            <Setting2 className='mx-3 cursor-pointer' />
                            <h3 className='cursor-pointer'>Settings</h3>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='my-5'>
                            <h4 className='font-bold text-xs leading-[14px]'>MY PROJECTS</h4>
                        </div>
                        <div className='flex items-center my-5'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#7AC555" />
                            </svg>
                            <h4 className='font-semibold text-[#0D062D] grow mx-3 text-base cursor-pointer'>Mobile Apps</h4>
                            <p className='font-extrabold text-base inline-block align-middle cursor-pointer'>...</p>
                        </div>
                        <div className='flex items-center my-5'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#FFA500" />
                            </svg>
                            <h4 className='grow font-medium mx-3 text-base cursor-pointer'>Website Redesign</h4>
                        </div>
                        <div className='flex items-center my-5'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#E4CCFD" />
                            </svg>
                            <h4 className='grow font-medium mx-3 text-base cursor-pointer'>Design System</h4>
                        </div>
                        <div className='flex items-center my-5'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#76A5EA" />
                            </svg>
                            <h4 className='grow font-medium mx-3 text-base cursor-pointer'>Wireframes</h4>
                        </div>
                    </div>
                    <div className='text-center m-3 mt-20'>
                        <div className='inline-block m-auto p-10 m-[-60px] bg-[#F5F5F5] rounded-full'>
                            <svg className='m-auto' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.21 4.36C15.17 2.26 13.16 0.709996 10.83 0.199996C8.38997 -0.340004 5.88997 0.239996 3.97997 1.78C2.05997 3.31 0.969971 5.6 0.969971 8.05C0.969971 10.64 2.51997 13.35 4.85997 14.92V15.75C4.84997 16.03 4.83997 16.46 5.17997 16.81C5.52997 17.17 6.04997 17.21 6.45997 17.21H11.59C12.13 17.21 12.54 17.06 12.82 16.78C13.2 16.39 13.19 15.89 13.18 15.62V14.92C16.28 12.83 18.23 8.42 16.21 4.36Z" fill="#FBCB18" />
                            </svg>
                        </div>
                        <div className='bg-[#F5F5F5] p-10 rounded-xl'>
                            <h3 className='text-sm font-medium text-black mb-2'>Thoughts Time</h3>
                            <p className='font-normal text-xs'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                            <input className='w-[100%] border-0 mt-5 rounded-lg h-10 focus:border-0 placeholder:text-black placeholder:text-center placeholder:font-medium' placeholder='Write a message' type='text' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar