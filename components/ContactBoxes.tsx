
interface ContactBoxesProps {
    title: string;
    email: string;
    phone: string;
}

const ContactBoxes = ({title, email, phone}: ContactBoxesProps) => {


    return (
        <div className="bg-gray-100 rounded-lg space-y-2 w-full p-4 md:w-[45%]">
            <p className="text-xl font-semibold tracking-wider">{title}</p>
            <p className="text-blue-400">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default ContactBoxes;