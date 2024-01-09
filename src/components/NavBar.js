import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) => { 
    return(
        <Link href={href} className={`${className} relative m-4 group`}>
            {title}

            <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300'></span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header 
    className='w-full px-8 py-2 font-medium flex items-center justify-between border'
    >
        <Logo/>
        <nav className='w-128 flex justify-between'> 
            <CustomLink href="/" title="Home" className='px-2'/>
            <CustomLink href="/about" title="About" className='px-2'/>
            <CustomLink href="/projects" title="Projects" className='px-2'/>
            <CustomLink href="/articles" title="Articles" className='px-2'/>
 
        </nav>
        {/* <nav>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>

        </nav> */}
    
    </header>
  )
}

export default NavBar