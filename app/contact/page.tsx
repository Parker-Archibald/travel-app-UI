'use client'
import ContactBoxes from "@/components/ContactBoxes";
import TopImage from "@/components/TopImage";
import TWInput from "@/components/twComps/TWInput";
import { useState } from "react";
import {PaperAirplaneIcon} from "@heroicons/react/24/outline"
import Image from "next/image";

const contBox: {
    title: string;
    email: string;
    phone: string;
}[] = [
    {
        title: 'Collaborate',
        email: 'collaborate@example.com',
        phone: '+1 (555) 905-2345'
    },
    {
        title: 'Press',
        email: 'press@example.com',
        phone: '+1 (555) 905-3456'
    },
    {
        title: 'Join our team',
        email: 'careers@example.com',
        phone: '+1 (555) 905-4567'
    },
    {
        title: 'Say hello',
        email: 'hello@example.com',
        phone: '+1 (555) 905-5678'
    },
]

const contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="flex justify-center">
            <div className="max-w-7xl w-full">
                <TopImage image='/Images/support.jpg' path='Contact Us'/>

                <section className='py-8 px-8 space-y-2 md:py-16'>
                    <h3 className='text-xl font-semibold tracking-wider'>Get In Touch</h3>
                    <p className='text-sm text-gray-500'>Please reach out if you have any questions!</p>
                </section>
            
                <section className='md:flex md:items-start md:space-x-4 md:my-8'>
                    {/* Form */}
                    <form className="px-8 space-y-4 mb-16 md:w-1/2">
                        <TWInput label='Name' type='text' placeholder="Your Name" func={(e: any) => setName(e.target.value)}/>
                        <TWInput label='Email' type='email' placeholder="you@example.com" func={(e: any) => setEmail(e.target.value)}/>
                        <TWInput label='Subject' type='text' placeholder="Subject" func={(e: any) => setSubject(e.target.value)}/>
                        <div>
                            <label htmlFor='message' className="block text-sm font-medium leading-6 text-gray-900">
                            Your Message
                            </label>
                            <div className="mt-2">
                            <textarea
                                name='message'
                                id='message'
                                className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-blue-50/50 transition-all ease-in-out duration-100"
                                placeholder='Your Message'
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            </div>
                        </div>
                        <div className="w-full flex pt-4">
                            <button type='submit' className="flex items-center justify-center bg-gray-900 px-4 py-1 rounded-full text-white w-full">Send<PaperAirplaneIcon className="w-6 ml-4"/></button>
                        </div>
                    </form>

                    {/* Contact Boxes */}
                    <div className="flex gap-y-4 justify-evenly flex-wrap px-8 my-8 md:w-1/2 md:gap-x-4 md:justify-start md:px-0">
                        {contBox.map(box => (
                            <ContactBoxes title={box.title} email={box.email} phone={box.phone}/>
                        ))}
                    </div>
                </section>

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

export default contact;