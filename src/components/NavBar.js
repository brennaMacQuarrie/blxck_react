import React from "react";
import VerticalNavBar from "./VerticalNavBar";

export default function NavBar () {
    return (
        <div className="absolute top-0 w-full px-16 py-4 flex justify-between items-center">
            <a className='group block font-SpaceAge text-lg tracking-widest' href="#home">
                <span className="text-blx-gold">Blxck</span>
                <span className='white-stroke group-hover:text-white'>maRketing</span>
            </a>
            <VerticalNavBar />
        </div>
    )
}

