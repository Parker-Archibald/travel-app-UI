'use client'
import Image from "next/image";
import SelectInput from '@/components/twComps/SelectInput'
import { useEffect, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useRef } from "react";
import { MagnifyingGlassIcon, CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {faker} from '@faker-js/faker';
import { StarIcon } from "@heroicons/react/20/solid";

const sliderPhotos: {
  image: string;
  title: string;
  desc: string;
}[] = [
  {
    image: '/Images/bali.avif',
    title: 'Bali, Indonesia.',
    desc: 'Bali is a beautiful tourist spot and is visited by many travelers.'
  },
  {
    image: '/Images/paris.jpg',
    title: 'Paris, France.',
    desc: 'The love capitol of the world, perfect for pastry lovers.'
  }, {
    image: '/Images/newYork.jpg',
    title: 'New York City, USA',
    desc: 'The city that never sleep, see the Statue of Liberty and the Empire State building.'
  },
  {
    image: '/Images/dubai.jpg',
    title: 'Dubai, UAE',
    desc: 'Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai.'
  }, 
  {
    image: '/Images/hawaii.jpg',
    title: 'Hawaii, USA',
    desc: 'Hawaii is an island state of the United States, in the Pacific Ocean about 2,000 miles (3,200 km) southwest of the U.S. mainland'
  }
]

const quickServices: {
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: '/Icons/bestServicesIcon.svg',
    title: 'Best Services',
    desc: 'Our services are reliable and convenient, our service is quality.'
  },
  {
    icon: '/Icons/finalPrice.svg',
    title: 'Price Guarantee',
    desc: 'Our prices are always final.'
  }, 
  {
    icon: '/Icons/bestHotel.svg',
    title: 'Hand-picked Hotels',
    desc: 'Each hotel has been handpicked by a travel expert.'
  }
]

const partners: string[] = [
  '/Icons/jaekmanLogo.png',
  '/Icons/booking.png',
  '/Icons/bigui.png',
  '/Icons/travava.png',
  '/Icons/katana.png'
]

export default function Home() {

  const calendarRef: any = useRef();
  const [muiDateTemp, setMuiDateTemp] = useState({})
  const [muiDate, setMuiDate]: any = useState('')
  const [imageNum, setImageNum] = useState(0)
  const [testimonials, setTestimonials]: any = useState([]);
  const [testNum, setTestNum] = useState(0)

    useEffect(() => {
        const testimonials = [...Array(5)].map((_, i) => (
            {
                id: i,
                avatar: faker.image.avatarLegacy(),
                name: faker.person.fullName(),
                company: faker.company.name(),
                quote: faker.lorem.words(15)
            }
        ))

        setTestimonials(testimonials);

    }, [])

  useEffect(() => {
      const newDate = new Date(muiDateTemp.$d)
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();

      setMuiDate(`${month}/${day}/${year}`)
  }, [muiDateTemp])

  const nextImage = () => {
    if(imageNum === sliderPhotos.length - 1) {
      setImageNum(0)
      document.getElementById(`0`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
    else {
      setImageNum(imageNum + 1)
      document.getElementById(`${imageNum + 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
  }

  const previousImage = () => {
    if(imageNum === 0) {
      setImageNum(sliderPhotos.length - 1)
      document.getElementById(`${sliderPhotos.length - 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
    else {
      setImageNum(imageNum - 1)
      document.getElementById(`${imageNum - 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
  }

  const nextTest = () => {
    if(testNum === testimonials.length - 1) {
      setTestNum(0);
      document.getElementById(`test${0}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
    else {
      setTestNum(testNum + 1);
      document.getElementById(`test${testNum + 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
  }

  const previousTest = () => {
    if(testNum === 0) {
      setTestNum(testimonials.length - 1)
      document.getElementById(`test${testimonials.length - 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
    else {
      setTestNum(testNum - 1)
      document.getElementById(`test${testNum - 1}`)?.scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
  }

  return (
    <main className="md:flex md:justify-center md:pb-48 min-h-full">
      
      <div className="h-full text-gray-900 pb-20 max-w-7xl">


        {/* Top Image section */}
        <section className="relative -mt-4 min-h-60 md:h-[32rem]">
          <Image src='/Images/brazil_img.jpg' width={1920} height={1080} alt='' className="absolute top-0 left-0 -z-10 h-60 opacity-90 md:h-[32rem] md:object-cover"/>

          <div className="pt-8 w-3/4 px-8 space-y-2 text-white md:pt-48">
            <h2 className="text-xl font-semibold mt-4 md:text-4xl">Begin Your Journey.</h2>
            <p className="text-sm text-gray-100">Explore the world and see all of the things you love!</p>
          </div>

          <div className="w-[90%] ml-[5%] bg-white rounded-full flex items-center mt-4 py-1 md:mt-12 md:w-3/4 md:ml-[12.5%] relative">
            {/* Location Input */}
            <SelectInput func={'locations'}/>

            {/* Date input */}
            <div onClick={() => calendarRef.current.click()} className='absolute left-[6.5rem] md:left-[20rem] w-1/4 text-gray-400 flex items-center justify-evenly text-sm cursor-pointer'>
              {!muiDateTemp?.$d ? (
                <p>Date</p>
              ) : (
                <p>{muiDate}</p>
              )}
              <CalendarDaysIcon className="w-6"/>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="hidden">
                <MobileDatePicker
                  ref={calendarRef}
                  label="Date"
                  onChange={setMuiDateTemp}
                />
              </div>
            </LocalizationProvider>

            {/* People Input */}
            <div className="absolute left-[15rem] md:left-[72%]">
              <select
                id="people"
                name="people"
                className="text-gray-400 ml-2 block w-fit rounded-md py-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none text-xs sm:leading-6 cursor-pointer"
                defaultValue="People"
              >
                {/* <option defaultValue hidden disabled>People</option> */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>

            <button className='bg-gray-900 text-white text-xs absolute right-0 rounded-r-full py-2.5 px-1 md:py-3'>Explore now</button>

          </div>

          <p className='mt-2 md:mt-10 md:ml-[12.5%] ml-[8%] text-gray-100 text-xs font-semibold'>Popular places: <span className="font-normal">Bali, Istanbul, Rome, Paris</span></p>

        </section>

        {/* Explore Section */}
        <section className="px-8 py-8 bg-gray-100 md:py-32">
              <header className="flex flex-col space-y-2">
                <h3 className="text-2xl font-light text-center md:text-4xl">Explore new worlds with exotic natural scenery</h3>
                <p className="text-sm text-center text-gray-400 px-8">Explore the world of nature's best kept secrets, or visit the city that never sleeps.</p>
              </header>

              {/* Slider Arrows*/}
              <div className="w-full flex mt-8 mb-4">
                <div className="w-1/2"><ChevronLeftIcon className="shadow-md w-8 rounded-md text-gray-500 ring-1 ring-inset ring-gray-200 py-2 px-2 cursor-pointer" onClick={previousImage}/></div>
                <div className="w-1/2 flex justify-end"><ChevronRightIcon className="shadow-md w-8 rounded-md text-gray-500 ring-1 ring-inset ring-gray-200 py-2 px-2 cursor-pointer" onClick={nextImage}/></div>
              </div>

              {/* Image Slider */}
              <div className="flex space-x-8 overflow-x-scroll snap-mandatory snap-x scrollbar-hide">
                {sliderPhotos.map((photo, index) => (
                  <div id={`${index}`} key={photo.title} className={`min-h-full transition-all ease-in-out duration-300 pb-4 rounded-lg flex-shrink-0 w-full snap-center max-w-96 ${imageNum === index ? 'bg-white md:bg-blue-50': 'bg-white'}`}>
                    <Image width={800} height={800} alt='' src={photo.image} className="rounded-md h-72 w-full object-fill"/>
                    <div className="flex flex-col space-y-4 text-gray-900 px-6 pt-4">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                      <p className="text-sm text-gray-600">{photo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
        </section>

        {/* Why choose us */}
        <section className="relative md:h-[30rem]">
          <Image src='/Images/vacation.jpg' width={1920} height={1080} alt='' className="absolute top-0 left-0 -z-10 md:h-full md:object-cover"/>

          <h3 className="w-full text-center pt-10 text-2xl font-semibold text-white tracking-wider md:text-4xl md:pt-40">Why choose us?</h3>
          <p className="text-gray-200 text-sm w-full text-center mt-2 md:mt-4 md:text-lg md:text-gray-100">Our services have been trusted by world travelers</p>

          <div className="flex space-x-4 w-full items-top justify-center mt-8 md:mt-20 md:space-x-8">
              {quickServices.map(service => (
                <div key={service.title} className="bg-white w-[28%] py-4 px-3 rounded-md flex flex-col shadow-md md:w-1/4 md:px-8 md:py-8">
                  <Image src={service.icon} alt='' width={400} height={400} className="w-12 rounded-md bg-gray-200 p-2 md:w-16"/>
                  <h3 className="text-sm font-semibold mt-2 md:text-lg">{service.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 md:text-sm">{service.desc}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Tour Partners */}
        <section className="py-16 md:my-32">
          <h4 className="w-full text-center text-2xl font-bold tracking-wider md:text-4xl">Our Tour Partners</h4>
          <p className="text-sm text-center px-8 text-gray-500 mt-4 md:text-lg">We have partnered with some of the best tours to help you get the most of your trip</p>
          <div className="flex justify-evenly mt-8 md:mt-16">
            {partners.map(partner => (
              <Image key={partner} src={partner} alt='' width={400} height={400} className="h-4 w-auto md:h-8"/>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <div className="px-8">
              <h3 className="text-xl tracking-wider text-gray-600 md:text-2xl">Testimonials</h3>
              <h2 className="text-2xl font-bold tracking-wider md:text-4xl md:mt-2">What our clients say</h2>
              <p className="text-sm text-gray-400 mt-2 md:mt-4">We have amazing customers who truly believe in our mission, here's what they have to say.</p>
          </div>

          {/* Slider Arrows*/}
          <div className="w-full flex my-2 justify-end pr-8 space-x-2">
            <ChevronLeftIcon className="shadow-md w-8 rounded-md text-gray-500 ring-1 ring-inset ring-gray-200 py-2 px-2 cursor-pointer" onClick={previousTest}/>
            <ChevronRightIcon className="shadow-md w-8 rounded-md text-gray-500 ring-1 ring-inset ring-gray-200 py-2 px-2 cursor-pointer" onClick={nextTest}/>
          </div>

          <div className="w-full flex space-x-8 overflow-x-scroll mt-4 py-20  px-4 snap-mandatory snap-x scrollbar-hide md:px-16 md:py-36">
                {testimonials.map((testimony: {
                  name: string;
                  avatar: string;
                  quote: string;
                  company: string
                }, index: number) => (
                  <div id={`test${index}`} key={testimony.name} className={`w-3/4 min-h-72 pb-4 shadow-md flex-shrink-0 rounded-sm snap-center max-w-96 transition-all ease-in-out duration-300 ${testNum === index ? 'bg-blue-50' : 'bg-white'}`}>
                    <div className="-mt-10 flex justify-center">
                      <Image src={testimony.avatar} alt='' width={100} height={100} className="w-20 h-20 rounded-full"/>
                    </div>
                    <p className="text-center mt-6 font-semibold text-lg tracking-wider">{testimony.name}</p>
                    <p className="text-center text-sm text-gray-500">{testimony.company}</p>
                    <div className="flex space-x-1 mt-8 ml-4">
                      {testimonials.map((test: Object, index: number) => (
                        <StarIcon key={`star${index}`} className="w-4 text-yellow-400"/>
                      ))}
                    </div>
                    <p className="px-4 mt-2">{testimony.quote}</p>
                  </div>
                ))}
              </div>
        </section>

        {/* Subscribe */}
        <section className="relative min-h-full">
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

    </main>
  );
}
