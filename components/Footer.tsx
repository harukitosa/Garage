import React, {FC} from 'react'
import Link from 'next/link'

const Footer: FC = () => {
    return (
        <div className="sticky bottom-0 main bg-white h-12 border-2 flex flex-row">
            <Link href="/">
                <div className="text-white w-1/4 h-12 flex items-center justify-center">
                    <img src="/home-outline.svg" alt="home" width="25"/>
                </div>
            </Link>

            <Link href="/profile">
                <div className="text-white w-1/4 h-12 flex items-center justify-center">
                    <img src="/person-circle-outline.svg" alt="home" width="25"/>
                </div>
            </Link>

            <div className="text-white w-1/4 h-12 flex items-center justify-center">
                <img src="/add-circle-outline.svg" alt="home" width="25"/>
            </div>
            <div className="text-white w-1/4 h-12 flex items-center justify-center">
                <img src="/notifications-outline.svg" alt="home" width="25"/>
            </div>
        </div>
    );
} 

export default Footer;