'use client'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon, HomeIcon, DocumentTextIcon, GiftIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { NavLink } from '@/atoms/NavAtom'

const options = [
    {
        name: 'Home',
        link: '/',
        icon: HomeIcon
    },
    {
        name: 'About',
        link: '/about',
        icon: DocumentTextIcon
    },
    {
        name: 'Package',
        link: '/package',
        icon: GiftIcon
    },
    // {
    //     name: 'Destination',
    //     link: '/destination',
    //     icon: MapPinIcon
    // },
    {
        name: 'Blog',
        link: '/blog',
        icon: ChatBubbleBottomCenterTextIcon
    },
    {
        name: 'Contact',
        link: '/contact',
        icon: ChatBubbleOvalLeftEllipsisIcon
    }
]

export default function Nav() {

  const [open, setOpen] = useState(false)
  const router = useRouter();
  const [navLink, setNavLink] = useRecoilState(NavLink)

  const setRoute = (link: string, e: Event) => {
    e.preventDefault();
    setNavLink(link)
    router.push(link)
    setOpen(false)
  }

  return (
    <nav className='md:flex md:justify-center'>


        <div className='md:hidden'>
                {!open && (
                        <Bars3Icon className='fixed top-2 right-2 text-white w-8 z-10' onClick={() => setOpen(true)}/>
                )}
            <Transition.Root show={open} as={Fragment}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-[7rem] flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="pointer-events-auto w-72 max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-l-md">
                                <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                        <div className='flex items-center space-x-4'>
                                            <Image alt='' width={100} height={100} src='/Icons/planeIcon.svg' className='w-12 h-auto'/>
                                            <p className='text-xl'>Travelocity</p>
                                        </div>
                                    </Dialog.Title>
                                    
                                    <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                                <div className="relative mt-16 flex-1 space-y-4 flex flex-col items-center">
                                    {options.map(option => (
                                        <div key={option.name} onClick={(e) => setRoute(option.link, e)} className={`text-gray-900 flex space-x-4 items-center w-5/6 rounded py-3 px-4 ${navLink === option.link && 'bg-gray-100'}`}>
                                            <option.icon className='w-8'/>
                                            <p className='text-xl'>{option.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>

        <div className='hidden md:flex max-w-7xl w-full py-4 bg-gray-800/50 fixed top-0 px-8 space-x-48 text-white z-20'>
            <div className='flex space-x-4 items-center text-3xl tracking-wider hover:cursor-pointer' onClick={() => router.push('/')}>
                <Image src='/Icons/planeIcon.svg' alt='' width={300} height={300} className='w-12'/>
                <h4>Travelocity</h4>
            </div>
            <div className='flex-1 flex space-x-10 justify-end'>
                <button onClick={() => router.push('/')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>Home</button>
                <button onClick={() => router.push('/about')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>About Us</button>
                <button onClick={() => router.push('/package')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>Package</button>
                {/* <button onClick={() => router.push('/destination')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>Destination</button> */}
                <button onClick={() => router.push('/blog')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>Blog</button>
                <button onClick={() => router.push('/contact')} className='tracking-wider hover:bg-gray-600/50 px-4 rounded-md'>Contact</button>
            </div>
        </div>
    </nav>
  )
}