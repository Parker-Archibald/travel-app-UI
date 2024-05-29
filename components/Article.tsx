import Image from "next/image";

interface ArticleProps {
    image?: string;
    type: string;
    tag: string;
    title: string;
    desc: string;
    width: string;
}

const Article = ({image, type, tag, title, desc, width}: ArticleProps) => {


    return (
        <div className={`${width} bg-white rounded-lg pb-4 md:pb-8 space-y-2 shadow-lg md:w-full hover:cursor-pointer`}>
            {image && (
                <Image src={image} alt='' width={400} height={400} className="rounded-t-lg max-h-56 w-full object-cover"/>
            )}
            <div className="flex space-x-1 text-xs mt-4 px-2 md:text-md md:px-4">
                <p>{type}</p> 
                <p>|</p>
                <p>{tag}</p>
            </div>
            <h3 className="text-sm font-semibold px-2 md:text-lg md:px-4">{title}</h3>
            <p className="text-xs text-gray-500 px-2 md:text-sm md:px-4">{desc}</p>
            <div className="pt-4 px-2 md:px-4">
                <button className="text-white bg-gray-900 px-4 py-1 rounded-full text-xs">Read More</button>
            </div>
        </div>
    )
}

export default Article;