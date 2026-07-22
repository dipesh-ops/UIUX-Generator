'use client'
import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const {user} = useUser();
  return (
    <div className='flex justify-between p-5'>
        <div>
            <Image src='/logo.png' alt='logo' width={60} height={60}/>
        </div>
        <ul className='flex gap-x-7 items-center'>
            <li className='hover:text-primary text-lg cursor-pointer'>Home</li>
            <li className='hover:text-primary text-lg cursor-pointer'>Pricing</li>
        </ul>
        {!user ? 
        <SignInButton mode='modal'><Button className='bg-primary p-2 cursor-pointer'>Get Started</Button></SignInButton> : <UserButton/>
        }
    </div>
  )
}

export default Header