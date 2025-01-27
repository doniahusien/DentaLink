'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'
const Header = () => {
    const route = useRouter();
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Patient", href: "/patient" },
        { label: "Market", href: "/market" },
        { label: "Contact Us", href: "/contact" },
    ]
    
    return (
        <>
            <div className='flex flex-row  '>
                <div>
                    <Image src={logo} alt="logo" />
                </div>

                <div>
                    <ul>
                        {navLinks.map((link => (
                            <li key={link.label}>
                                <Link href={link.href} style={{textDecoration:route.pathname == link.href?'underline':'none'}}>{link.label}</Link>
                            </li>
                        )))}
                    </ul>
                </div>

                <div>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Header