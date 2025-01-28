'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import Button from './ui/Button/Button'
import { usePathname } from 'next/navigation'
const Header = () => {
    
    const pathname = usePathname()
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Patient", href: "/patient" },
        { label: "Market", href: "/market" },
        { label: "Contact Us", href: "/contact" },
    ]
    
    return (
        <>
            <div className='flex flex-wrap flex-row justify-around items-center  p-6  md:p-8 bg-transparent fixed top-0 left-0 z-20 w-full'>
                <div className=''>
                    <Image src={logo} alt="logo" width={240} height={100}/>
                </div>

                <div>
                    <ul className='flex flex-row gap-8 pt-4 '>
                        {navLinks.map((link => (
                            <li key={link.label}>
                                <Link href={link.href} style={{fontSize:'20px', color: pathname == link.href ? '#247CFF' : '#1E1E1E'}}>{link.label}</Link>
                            </li>
                        )))}
                    </ul>
                </div>

                <div>
                    <Button title='Install App' link='/' />
                    <Button title='Log in' link='/sign-in' />
                </div>
            </div>
        </>
    )
}

export default Header