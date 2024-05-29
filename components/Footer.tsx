import Image from "next/image";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {

    const router = useRouter()

    return (
        <footer className="md:flex md:justify-center">
            <div className="h-full bg-white py-10 flex flex-col space-y-8 px-8 md:flex-row md:space-y-0 md:space-x-24 md:py-24 max-w-7xl">
                {/* Logo */}
                <div className="space-y-2 flex flex-col">
                    <div className="flex space-x-2 items-center text-xl tracking-wider font-semibold">
                        <Image src='Icons/planeIcon.svg' alt='' width={200} height={200} className="w-12 h-12"/>
                        <p>Travelocity</p>
                    </div>
                    <p className="text-xs text-gray-500">A company focused on giving you the best travel experience while saving money</p>
                </div>

                {/* Contact */}
                <div className="mt-2 space-y-4 text-sm">
                    <h4 className="text-md font-semibold tracking-wider">Contact Information</h4>
                    <div className="flex space-x-2 ml-2">
                        <MapPinIcon className="w-4"/>
                        <p>732 Despard St, Atlanta</p>
                    </div>
                    <div className="flex space-x-2 ml-2">
                        <EnvelopeIcon className="w-4"/>
                        <p>info@travelocity.com</p>
                    </div>
                    <div className="flex space-x-2 ml-2">
                        <PhoneIcon className="w-4"/>
                        <p>+97 888 8888</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-2 space-y-2 text-sm">
                    <h4 className="text-md font-semibold tracking-wider">Quick Links</h4>
                    <p className="ml-2 cursor-pointer" onClick={() => router.push('/')}>Home</p>
                    <p className="ml-2 cursor-pointer" onClick={() => router.push('/about')}>About Us</p>
                    <p className="ml-2 cursor-pointer" onClick={() => router.push('/package')}>Tours</p>
                    <p className="ml-2 cursor-pointer" onClick={() => router.push('/contact')}>Contact</p>
                </div>

                {/* Follow */}
                <div>
                    <h4 className="text-md font-semibold tracking-wider">Follow Us</h4>
                    <div className="flex space-x-4 mt-4 ml-2 text-xl">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;