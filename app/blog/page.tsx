'use client'
import TopImage from "@/components/TopImage";
import Image from "next/image";
import { ArrowLongRightIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import TWInput from "@/components/twComps/TWInput";
import { useState } from "react";


const blog = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [website, setWebsite] = useState<string>('')

    const blogItems: {
        image: string;
        title: string;
        date: string;
    }[] = [
        {
            image: '/Images/beach.jpg',
            title: '9 Popular Travel Destinations on Sale in 2024',
            date: 'Dec 14, 2023'
        },
        {
            image: '/Images/marketplace.jpg',
            title: 'Travel Stories for Now and the Future',
            date: 'Jan 16, 2024'
        },
        {
            image: '/Images/mountain.jpg',
            title: 'How are we going to travel in 2024?',
            date: 'March 3, 2024'
        }
    ]

    const categories: string[] = [
        'Travel',
        'Tips',
        'Stories',
        'Destinations',
    ]


    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full">
                <TopImage image='/Images/travelGuide.jpg' path='Blog'/>

                {/* Blog and side bar */}
                <div className="bg-gray-100 px-8 py-16 space-y-8 md:flex-row-reverse md:flex md:space-x-reverse md:space-x-12 items-top md:space-y-0">
                    {/* Side bar */}
                    <section className="space-y-8 md:w-1/3">
                        {/* Recent Posts */}
                        <div className="bg-white rounded-lg flex flex-col space-y-8 py-8 px-4 shadow-md">
                            <h3 className="text-lg font-semibold tracking-wider">Recent Posts</h3>
                            {blogItems.map(item => (
                                <div key={item.title} className="flex space-x-4 hover:cursor-pointer">
                                    <Image src={item.image} alt='' width={400} height={400} className="w-1/3"/>
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold tracking-wider">{item.title}</h4>
                                        <p className="text-xs text gray-500">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Categories */}
                        <div className="bg-white rounded-lg flex flex-col py-8 px-4 shadow-md hover:cursor-pointer">
                            <h3 className="text-lg font-semibold tracking-wider mb-8">Categories</h3>
                            <div className="space-y-4">
                                {categories.map(category => (
                                    <div key={category} className="space-y-4">
                                        <div className="flex space-x-4 text-md tracking-wider">
                                            <ArrowLongRightIcon className="w-6"/>
                                            <p>{category}</p>
                                        </div>
                                        <hr className="w-full"/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Have any questions */}
                        <div className="bg-gray-900 text-white p-4 rounded-lg space-y-8 shadow-md">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold tracking-wider">Have Any Questions?</h3>
                                <p className="text-sm text-gray-300">Do not hesitate to give us a call. We are an expert team that is happy to talk to you.</p>
                            </div>
                            <div className="space-y-4 pb-4">
                                <div className="flex space-x-4 items-center hover:cursor-pointer">
                                    <PhoneIcon className="w-6"/>
                                    <p>+97 888 8888</p>
                                </div>
                                <div className="flex space-x-4 items-center hover:cursor-pointer">
                                    <EnvelopeIcon className="w-6"/>
                                    <p>info@travelocity.com</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Blog */}
                    <section className="space-y-8 md:w-2/3">
                        <Image src='/Images/rome.jpg' alt='' width={800} height={800} className="rounded-lg shadow-md"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. 
                        </p>
                        <h3 className="py-2 text-lg font-semibold tracking-wider">Rice Terraces, Tegallalang</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. 
                        </p>
                        <Image src='/Images/riceTerrace.jpg' alt='' width={800} height={800} className="rounded-lg shadow-md"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. 
                        </p>

                        {/* Tags and links */}
                        <div className="space-y-6 py-4">
                            <div className="flex text-sm">
                                <p className="w-1/2">Tags: <b>Destination, Travel</b></p>
                                <div className="flex space-x-2 w-1/2 items-center justify-end">
                                    <p>Share This: </p>
                                    <FaFacebook className="text-lg"/>
                                    <FaInstagram className="text-lg"/>
                                    <FaLinkedin className="text-lg"/>
                                </div>
                            </div>
                            <hr className="w-full"/>
                        </div>

                        {/* Leave a Reply */}
                        <div className="pt-20">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold tracking-wider">Leave a Reply</h3>
                                <p className="text-sm text-gray-500">Your email address will no be published. Required fields are marked *</p>
                            </div>
                            <form className="space-y-4 py-8">
                                <div className='space-y-2'>
                                    <label htmlFor='message' className="block text-md font-medium leading-6 text-gray-900 tracking-wider">Comment</label>
                                    <textarea name='message' id='message' className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                    focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none transition-all ease-in-out duration-100 focus:bg-blue-50/50"/>
                                </div>
                                <TWInput label='Name' type='text' placeholder="" func={(e: any) => setName(e.target.value)}/>
                                <TWInput label='Email' type='email' placeholder="" func={(e: any) => setEmail(e.target.value)}/>
                                <TWInput label='Website' type='text' placeholder="" func={(e: any) => setWebsite(e.target.value)}/>
                                <button className='bg-gray-900 text-white px-8 py-2 rounded-full'>Post Comment</button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Subscribe */}
                <section className="relative md:h-[30rem]">
                    <Image src='/Images/futureMap.jpg' width={1920} height={1080} alt='' className="absolute top-0 left-0 opacity-90 -z-10 md:h-[30rem] object-cover"/>
                    <div className="md:pt-20">
                        <h3 className="text-white text-2xl tracking-wider text-center pt-10">Subscribe to get a special price</h3>
                        <p className="text-sm text-center mt-4 text-gray-300">Don't want to miss something? Subscribe right now and get special promotions and the monthly newsletter.</p>
                    </div>

                    {/* Input */}
                    <div className="w-[90%] ml-[5%] mt-12 md:w-[70%] md:ml-[15%] pb-16">
                        <div className="mt-2 flex rounded-full shadow-sm">
                            <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-l-full border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 focus:outline-none sm:text-sm sm:leading-6"
                                placeholder="Email"
                                />
                            </div>
                            <button
                                type="button"
                                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-full px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bg-gray-900"
                            >
                                Subscribe
                            </button>
                            </div>
                        </div>
                    </section>

            </div>
        </div>
    )
}

export default blog;