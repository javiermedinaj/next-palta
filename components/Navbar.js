import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </menu>
        </div>
    )
}

export default Navbar