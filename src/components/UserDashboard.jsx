import React from 'react'
import Logo from './Logo'
import {FaHome, FaUserAlt} from "react-icons/fa"
import {BiUserCircle} from "react-icons/bi"
import {GoUnverified} from "react-icons/go"
import {SiSpringsecurity} from "react-icons/si"
import { AiFillSetting } from "react-icons/ai"
import { BsBell } from "react-icons/bs"
import {Link} from "react-router-dom"


const UserDashboard = () => {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <section className="w-full grid grid-cols-5 bg-gray-800 ">
            <header className='bg-gray-800 col-span-1 h-screen'>
                <div className="flex items-center justify-start h-16 bg-gray-900" >
                    <Logo />
                </div>
                <nav className="flex justify-center" >
                    <ul className='text-slate-400 flex flex-col w-11/12 py-5' >
                        <li><a href="www.google.com" className='flex items-center h-12 rounded-md bg-gray-900 text-gray-200 text-lg hover:bg-gray-900'><span className='w-7 text-2xl mx-3'><FaHome /></span>Dashboard</a></li>
                        <li className='py-3'><a href="www.google.com" className='flex items-center h-12 rounded-md text-gray-200 text-lg hover:bg-gray-900'> <span className='w-7 text-2xl mx-3'><BiUserCircle /></span>Profile</a></li>
                        <li><a href="www.google.com" className='flex items-center h-12 rounded-md text-gray-200 text-lg hover:bg-gray-900'> <span className='w-7 text-2xl mx-3'><GoUnverified /></span>KYC</a></li>
                        <li className='py-3'><a href="www.google.com" className='flex items-center h-12 rounded-md text-gray-200 text-lg hover:bg-gray-900'> <span className='w-7 text-2xl mx-3'><SiSpringsecurity /></span>2FA Auth</a></li>
                        <li><a href="www.google.com" className='flex items-center h-12 rounded-md text-gray-200 text-lg hover:bg-gray-900'> <span className='w-7 text-2xl mx-3'><AiFillSetting /></span>Settings</a></li>
                        <li><button onClick={logout} className='flex w-full items-center h-12 rounded-md text-gray-200 text-lg hover:bg-gray-900'> <span className='w-7 text-2xl mx-3'><AiFillSetting /></span>Logout</button></li>
                    </ul>
                </nav>
            </header>

            <main className='bg-gray-600 col-span-4'>
                <div className='flex justify-between items-center w-full px-5 text-lg text-teal-500 h-16 bg-gray-900 border-l-2 border-gray-800'>
                    <div>
                        <p>Hello! <span className='text-orange-400 font-bold text-md'>John Doe</span></p>
                    </div>
                    <div className='flex justify-between w-20'>
                        <BsBell />
                        <FaUserAlt />
                    </div>
                </div>
                <div className='flex items-center'>
                    <article className='flex flex-col w-full px-8'>
                        <div className='flex items-center justify-start h-20 bg-gray-600 '>
                            <h2 className='font-bold text-3xl text-slate-200'>Dashboard</h2>
                        </div>
                        <div className='flex w-full min-h-[450px] bg-gray-600 border-2 border-slate-200 border-dotted'>
                            <div className='grid grid-row-5 text-slate-200 px-8 py-3'>
                                <p className='row-span-1'>Dashboard Content </p>
                                <p className='row-span-1'>Dashboard Content</p>
                                <p className='row-span-1'>Dashboard Content</p>
                                <p className='row-span-1'>Dashboard Content</p>
                                <p className='row-span-1'>Dashboard Content</p>
                            </div>
                        </div>

                    </article>
                </div>
            </main>
        </section>
  )
}

export default UserDashboard