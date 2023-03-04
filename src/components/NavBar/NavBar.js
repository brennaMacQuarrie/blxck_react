import React from "react";

export default function NavBar () {
    return (
        <div className="w-full px-4 py-2 bg-black/90 flex justify-between items-center text-white">
            <a className='font-Arial uppercase tracking-wider' href="#home"><span className="text-gray-400/90">blxck</span>marketing</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

