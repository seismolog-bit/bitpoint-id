import { useState } from 'react';
import Link from 'next/link';

function Header() {
    const [active, setActive] = useState(false)
    const handleClick = () => { setActive(!Active) }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative pb-6 flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                        <Link href={{ pathname: '/' }}>
                            <a>
                            <span className="sr-only">BitPoint ID</span>
                            <img className="h-8 w-auto sm:h-10" src='/img/logo.png'  />
                            </a>
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true" onClick={handleClick}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <Link href={{ pathname: '/product' }}><a  className={ 'font-medium text-gray-500 hover:text-gray-900'}>Product</a></Link>
                        <Link href={{ pathname: '/about' }}><a  className='font-medium text-gray-500 hover:text-gray-900'>About</a></Link>
                        <Link href={{ pathname: '/contact' }}><a  className='font-medium text-gray-500 hover:text-gray-900'>Contact</a></Link>
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Whatsapp</a>
                    </div>
                </nav>
            </div>
            <div className={`${active ? '' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        {/* <div> */}
                        <Link href={{ pathname: '/' }}>
                            <a>
                            <img className="h-8 w-auto" src="/img/logo.png" alt="" />
                            </a>
                        </Link>
                        {/* </div> */}
                        <div className="-mr-2">
                        <button type="button" className=" bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={handleClick}>
                            <span className="sr-only">Close main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                        <Link href={{ pathname: '/product' }} ><a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' role='menuitem'>Product</a></Link>
                        <Link href={{ pathname: '/about' }} ><a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' role='menuitem'>About</a></Link>
                        <Link href={{ pathname: '/contact' }} ><a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50' role='menuitem'>Contact</a></Link>
                        </div>
                        <div role="none">
                        <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
                            Whatsapp
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header