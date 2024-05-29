
interface TWInputProps {
  label: string;
  type: string;
  placeholder: string;
  func: Function; 
}

export default function TWInput({label, type, placeholder, func}: TWInputProps) {
    return (
      <div>
        <label htmlFor={label} className="block text-md font-medium leading-6 text-gray-900 tracking-wider">
          {label}
        </label>
        <div className="mt-2">
          <input
            type={type}
            name={label}
            id={label}
            className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none transition-all ease-in-out duration-100 focus:bg-blue-50/50"
            placeholder={placeholder}
            onChange={(e) => func(e)}
          />
        </div>
      </div>
    )
  }