import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/questions/header"

export default function HomePage(){
    return(
        <>
            <header className="bg-white border-b border-gray-300 py-4 px-8 fixed top-0 left-0 w-full">
                <Header/>
            </header>
            <main className="mt-32 md:mt-48 px-8">                
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-light">Get insights quickly, with MERN forms</h2>
                    <p role="contentinfo" className="mt-5 text-lg md:text-xl text-gray-600">Easily create and share online forms and surveys, and analyze responses in real-time.</p>
                </div>
                <div>
                    <Link onClick={() => console.log('clicked')} className='px-8 py-3 rounded-md bg-primary text-white font-semibold mx-auto mt-12 mb-4 block w-fit' to='/forms/questions'>Go to Forms</Link>
                </div>
            </main>
        </>
    )
}