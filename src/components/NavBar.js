import React from "react";
import VerticalNavBar from "./VerticalNavBar";

export default function NavBar () {
    return (
        <div className='z-40 fixed top-0 w-full px-5 md:px-16 py-2 md:py-4 flex justify-between items-center'>
            <a className='group block font-SpaceAge text-base sm:text-lg tracking-widest' href="#home">
                <span className='text-blx-gold'>Blxck</span>
                <span className='white-stroke group-hover:text-white'>maRketing</span>
            </a>
            <VerticalNavBar />
        </div>
    )
}

