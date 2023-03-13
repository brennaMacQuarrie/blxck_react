import React from "react";
import VerticalNavBar from "./VerticalNavBar";

export default function NavBar () {
    return (
        <div className="absolute top-0 w-full px-16 py-4 bg-transparent flex justify-between items-center text-white">
            <a className='font-SpaceAge uppercase font-black tracking-widest' href="#home"><span className="text-blx-gold">blxck</span>marketing</a>
            <VerticalNavBar />
        </div>
    )
}

