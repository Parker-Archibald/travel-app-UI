import Article from "@/components/Article";
import DestinationCard from "@/components/DestinationCard";
import TopImage from "@/components/TopImage";
import Image from "next/image";


const Package = () => {

    const destinations: {
        name: string;
        cost: string;
        stars: Array<any>;
        image: string;
        desc: string;
    }[] = [
        {
            name: 'Paris, France',
            cost: '$299.00/2 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/paris.jpg',
            desc: 'Paris is one of the most popular destinations. Widely known for being the city of love, you can see many sights here including the Eiffel Tower, The Louvre Museum and much more!' 
        },
        {
            name: 'Rio, Brazil',
            cost: '$299.00/3 Days',
            stars: Array.apply(null, Array(4)).map(function () {}),
            image: '/Images/brazil_img.jpg',
            desc: 'The second-most-populous city in Brazil (after São Paulo) and the sixth-most-populous city in the Americas.' 
        },
        {
            name: 'New York, USA',
            cost: '$499.00/3 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/newYork.jpg',
            desc: 'The city that never sleep, see the Statue of Liberty and the Empire State building.' 
        },
        {
            name: 'Hawaii, USA',
            cost: '$399.00/2 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/hawaii.jpg',
            desc: 'Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland' 
        },
        {
            name: 'Dubai, UAE',
            cost: '$599.00/2 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/dubai.jpg',
            desc: 'Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai.' 
        },
        {
            name: 'Bali, Indonesia',
            cost: '$299.00/3 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/bali.avif',
            desc: 'Bali is a beautiful tourist spot and is visited by many travelers.' 
        },
        {
            name: 'Porto, Portugal',
            cost: '$299.00/3 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/porto.jpg',
            desc: 'Located along the Douro River estuary in northern Portugal, Porto is one of the oldest European centers and its core was proclaimed a World Heritage Site by UNESCO in 1996' 
        },
        {
            name: 'Madeira, Portugal',
            cost: '$299.00/3 Days',
            stars: Array.apply(null, Array(5)).map(function () {}),
            image: '/Images/madeira.jpg',
            desc: 'Officially the Autonomous Region of Madeira, is one of two autonomous regions of Portugal, the other being the Azores.' 
        }
    ]

    return (
        <div className="flex justify-center min-h-full">
            <div className="max-w-7xl">
                {/* Top Image */}
                <TopImage image='/Images/hikingMexico.jpg' path='Package'/>

                {/* Popular Destinations */}
                <section className="bg-gray-50 py-8 md:py-16">
                    <div className="px-8 space-y-8 md:flex md:space-y-0 md:items-center">
                        <div className="space-y-4 md:w-2/3">
                            <h2 className="font-semibold text-2xl tracking-wider md:text-3xl">Popular Destinations</h2>
                            <p className="text-sm text-gray-500">Some of our most popular destinations. Well known around the world, these are some of the most sought after vacation spots.</p>
                        </div>
                        <div className="md:flex-1 md:text-end">
                            <button className="text-white bg-gray-900 px-8 py-1 rounded-full">Discover More</button>
                        </div>
                    </div>

                    {/* Destination Cards */}
                    <section className="px-8 flex flex-col my-8 space-y-8 md:flex-row md:flex-wrap md:justify-evenly md:space-y-0 md:gap-y-8 md:my-16">
                        {destinations.map((dest, index) => (
                            <DestinationCard key={dest.name} name={dest.name} cost={dest.cost} stars={dest.stars} image={dest.image} desc={dest.desc}/>
                        ))}
                    </section>
                </section>

                {/* Hot Air Balloon Image */}
                <section>
                    <Image src='/Images/hotAirBalloon.jpg' alt='' width={1920} height={1080} className="max-h-96 object-cover"/>
                </section>

                {/* Tips and Articles */}
                <section className="py-8 bg-gray-50 px-8 md:py-16">
                    <div className="space-y-8 md:flex md:space-y-0 md:items-center">
                        <div className="space-y-4 md:w-2/3">
                            <h2 className="font-semibold text-2xl tracking-wider md:text-3xl">Tips & Articles</h2>
                            <p className="text-sm text-gray-500">Read some of our guides for traveling to the top destinations. Stay up to date on all of our traveling guides by subscribing to our newsletter!</p>
                        </div>
                        <div className="md:flex-1 md:text-end">
                            <button className="text-white bg-gray-900 px-8 py-1 rounded-full">View More</button>
                        </div>
                    </div>

                    {/* Articles */}
                    <div className="flex flex-col space-y-4 mt-8 md:flex-row md:space-y-0 md:space-x-4 md:my-16">
                        <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4">
                            <Article type='Percent' tag='Tips' title='9 Popular Travel Destinations on Sale in 2024' desc='There are a ton of destinations that are on sale now! Take a look.' width='w-1/2'/>
                            <Article type='Travel' tag='Tips' title='How are we going to travel in 2024' desc='Travel procedures are constantly changing, here is how travel is popular today.' width='w-1/2'/>
                        </div>
                        <Article image='/Images/familyCar.jpg' type='Travel' tag='Tips' title='How are we going to travel in 2024' desc='Travel procedures are constantly changing, here is how travel is popular today.' width='w-full'/>
                    </div>
                </section>

                {/* Subscribe */}
                <section className="relative pb-10">
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

export default Package;
