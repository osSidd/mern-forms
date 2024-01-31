import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Header(){
    return (
        <Link title='MERN forms' to='/'>
            <div className="w-fit flex items-center">
                <img src={logo} alt="logo" className="w-8 sm:w-12 mr-2 sm:mr-4"/>
                <h1 className="text-xl sm:text-3xl"><span className="uppercase font-semibold">mern</span> forms</h1>
            </div>
        </Link>
    )
}