import React from 'react'
import LOGO from "../../assets/Logo.svg"
const Logo = () => {
    return (
        <div>
            <a href="/"> <img className='min-w-[70px]' src={LOGO} alt="Logo Noon" /></a>
        </div>
    )
}

export default Logo