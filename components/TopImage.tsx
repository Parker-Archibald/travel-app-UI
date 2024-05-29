import Image from "next/image"

interface TopImageProps {
    image: string;
    path: string;
}


const TopImage = ({image, path}: TopImageProps) => {


    return (
        <div>
            <section className="relative h-72 flex items-center justify-center md:h-96">
                <Image src={image} alt='' width={1920} height={1080} className="opacity-90 absolute top-0 left-0 -z-10 h-72 object-cover md:h-96"/>
                <div className="text-white drop-shadow-lg">
                    <h4 className="text-2xl tracking-wider font-semibold text-center">{path}</h4>
                    <p className='text-center tracking-wider'>Home {'>'} {path}</p>
                </div>

            </section>
        </div>
    )
}

export default TopImage;