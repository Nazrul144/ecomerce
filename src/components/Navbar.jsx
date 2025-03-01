'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const navMenues = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
    ]
    return (
        <div className='w-[1100px] mx-auto bg-gray-400 text-center text-xl '>
            <div className='space-x-2'>
                {
                    navMenues?.map((navMenue)=> <Link className={pathName === navMenue.path? 'text-green-500': ""} key={navMenue.path} href={navMenue.path}>{navMenue.title}</Link>)
                }
            </div>
        </div>
    );
}

export default Navbar;
