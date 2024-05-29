import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface DestinationCardProps {
    name: string;
    cost: string;
    stars: Array<any>;
    image: string;
    desc: string;
}

const DestinationCard = ({name, cost, stars, image, desc}: DestinationCardProps) => {

    return (
        <div className="rounded-lg bg-white pb-8 md:pb-0 shadow-lg max-w-96 flex-shrink-0">
            <Image alt='' src={image} width={500} height={500} className="rounded-t-lg h-1/2 object-cover"/>
            <div className="flex px-4 items-end pt-8">
                <h3 className="w-3/4 text-2xl font-semibold">{name}</h3>
                <p className="w-1/2 text-end">{cost}</p>
            </div>
            <p className="px-4 text-sm text-gray-500 mt-4 md:h-20">{desc}</p>
            <div className="flex px-4 items-center mt-8 md:mt-4">
                <div className="space-x-1 flex w-1/2">
                    {stars.map(star => (
                        <StarIcon className="w-4 h-auto text-yellow-400"/>
                    ))}
                </div>
                <div className="w-1/2 text-end">
                    <button className="bg-gray-900 text-white px-4 py-1 rounded-full">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard;