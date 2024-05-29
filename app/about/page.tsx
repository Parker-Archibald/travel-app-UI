'use client'
import Image from "next/image";
import { UserGroupIcon, RocketLaunchIcon, PresentationChartLineIcon, UserIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { FaQuoteLeft } from "react-icons/fa";
import { LiaMountainSolid } from "react-icons/lia";
import {faker} from '@faker-js/faker';
import { useEffect, useState } from "react";
import TopImage from "@/components/TopImage";

const about = () => {

    const [natureImages, setNatureImages] = useState([])

    const items: {
        icon: any;
        title: string;
        desc: string;
    }[] = [
        {
            icon: UserGroupIcon,
            title: 'Great Teamwork',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. '
        },
        {
            icon: RocketLaunchIcon,
            title: 'Our Vision',
            desc: 'zLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. '
        }, 
        {
            icon: PresentationChartLineIcon,
            title: 'Our Mission',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra. '
        }
    ]

    useEffect(() => {
        const naturePics: any = [...Array(11)].map((_, i) => (
            {
                id: i,
                image: faker.image.urlLoremFlickr({category: 'city'})
            }
        ))

        setNatureImages(naturePics);
    }, [])

    return (
        <div className="w-full md:flex md:justify-center overflow-hidden">

            <div className="max-w-7xl h-full">
                {/* Top Image Section */}
                <TopImage image='/Images/about.jpg' path='About Us'/>

                {/* Great teamwork */}
                <section className="py-20">
                    <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:px-10">
                        {items.map(item => (
                            <div className="flex flex-col w-full px-8 space-y-4">
                                <item.icon className='w-1/4'/>
                                <h3 className="text-2xl font-semibold tracking-wider">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote */}
                <section className="px-8 md:flex md:space-x-12 md:my-20">
                    <Image src='/Images/hiking.jpg' alt='' width={900} height={900} className="rounded-tl-[100px] rounded-br-[100px] md:w-1/2 md:object-cover"/>
                    <div className="flex flex-col">
                        <div className="my-8 text-sm space-y-4 md:my-0">
                            <FaQuoteLeft className="text-4xl"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor sapien et urna tincidunt fringilla. Vivamus at augue interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna. Suspendisse suscipit est et neque.</p>
                            <br/>
                            <p>Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a, accumsan justo.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">Siti Sarah</h4>
                            <p className="text-sm text-gray-500">Founder Traveloctiy</p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="relative mt-20 min-h-72 text-white w-full h-full md:h-96">
                    <Image src='/Images/hikingStats2.jpg' width={1920} height={1080} alt='' className="absolute top-0 left-0 -z-10 w-full h-72 md:h-96 md:object-cover"/>
                    <div className="w-full h-72 absolute top-0 left-0 bg-opacity-10 bg-gray-800 backdrop-blur-sm md:h-96"/>
                    <div className="flex justify-center gap-x-16 h-48 pt-16 w-full flex-wrap items-center gap-y-8 md:h-96 md:items-center md:pt-0 md:gap-x-0">
                        <div className="text-xs flex space-x-2 drop-shadow-lg items-center w-1/4 h-14 md:justify-center">
                            <UserGroupIcon className="w-8 md:w-16"/>
                            <div className="w-16">
                                <p>126 +</p>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>

                        <div className="text-xs flex space-x-2 drop-shadow-lg items-center w-1/4 h-14 md:justify-center">
                            <UserIcon className="w-8 md:w-16"/>
                            <div className="w-16">
                                <p>230 +</p>
                                <p>New Travelers</p>
                            </div>
                        </div>

                        <div className="text-xs flex space-x-2 drop-shadow-lg items-center w-1/4 h-14 md:justify-center">
                            <LiaMountainSolid className="text-3xl md:text-6xl"/>
                            <div className="w-16">
                                <p>50 +</p>
                                <p>New Destinations</p>
                            </div>
                        </div>

                        <div className="text-xs flex space-x-2 drop-shadow-lg items-center w-1/4 h-14 md:justify-center">
                            <TrophyIcon className="w-8 md:w-16"/>
                            <div className="w-16">
                                <p>Award Winning</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="flex flex-col space-y-4 w-full overflow-x-scroll overflow-y-hidden scrollbar-hide px-8">
                    <div className="w-full flex flex-col items-center py-20 tracking-wider md:space-y-4">
                        <h3 className="text-xl text-gray-500 md:text-3xl">Gallery</h3>
                        <h2 className="text-2xl font-semibold md:text-4xl">Unforgettable Moments</h2>
                    </div>
                    <div className="flex overflow-x-scroll w-full px-8 h-72 gap-x-4 md:h-[50vh] overflow-y-hidden scrollbar-hide md:py-4">
                        <Image src={natureImages[0]?.image} width={400} height={400} alt='' className='w-[70%] h-full rounded-lg flex-shrink-0 object-cover'/>
                        <div className="flex flex-col flex-shrink-0 gap-2 w-full h-full">
                            <Image src={natureImages[1]?.image} width={400} height={400} alt='' className='w-full h-1/2 rounded-lg object-cover'/>
                            <div className="flex gap-2">
                                <Image src={natureImages[2]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover md:h-2/3'/>
                                <Image src={natureImages[3]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover md:h-2/3'/>
                            </div>
                        </div>
                        <Image src={natureImages[4]?.image} width={400} height={400} alt='' className='w-[70%] h-full rounded-lg flex-shrink-0 object-cover'/>
                        <div className="flex flex-col flex-shrink-0 gap-y-2 w-full h-full">
                            <div className="flex gap-x-2 h-1/2">
                                <Image src={natureImages[5]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover'/>
                                <Image src={natureImages[6]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover2'/>
                            </div>
                            <Image src={natureImages[7]?.image} width={400} height={400} alt='' className='w-full h-1/2 rounded-lg object-cover'/>
                        </div>
                        <div className="flex flex-col flex-shrink-0 gap-2 w-full h-full">
                        <Image src={natureImages[8]?.image} width={400} height={400} alt='' className='w-full h-1/2 rounded-lg object-cover'/>
                            <div className="flex gap-2">
                                <Image src={natureImages[9]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover md:h-2/3'/>
                                <Image src={natureImages[10]?.image} width={400} height={400} alt='' className='w-1/2 h-full rounded-lg object-cover md:h-2/3'/>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* Subscribe */}
                <section className="relative md:h-[30rem] py-4 my-8 mt-20">
                <Image src='/Images/futureMap.jpg' width={1920} height={1080} alt='' className="absolute top-0 left-0 opacity-90 -z-10 md:h-[30rem] object-cover"/>
                <div className="md:pt-20">
                    <h3 className="text-white text-2xl tracking-wider text-center pt-10">Subscribe to get a special price</h3>
                    <p className="text-sm text-center mt-4 text-gray-300">Don't want to miss something? Subscribe right now and get special promotions and the monthly newsletter.</p>
                </div>

                {/* Input */}
                <div className="w-[90%] ml-[5%] mt-12 md:w-[70%] md:ml-[15%]">
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

export default about;