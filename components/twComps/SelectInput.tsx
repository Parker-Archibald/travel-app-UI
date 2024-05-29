'use client'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Leslie Alexander' },
  // More users...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface SelectInputProps {
  func: string;
}

export default function SelectInput({func}: SelectInputProps) {
  const [query, setQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [locationSearch, setLocationSearch] = useState('')
  const [searchData, setSearchData]: any = useState([])
  const [timer, setTimer]: any = useState()

        const getLocations = async () => {
          const url: string = `https://google-maps-api-free.p.rapidapi.com/google-autocomplete?input=${locationSearch}`
          const options: Object = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '0fcef50eecmshf92ba073bbdc6dcp1bedc3jsn00299fdcbba0',
              'x-rapidapi-host': 'google-maps-api-free.p.rapidapi.com'
            }
          };
      
          try {
            const response = await fetch(url, options)
            const result = await response.json()
            setSearchData(result)
          } catch(error) {
            console.error(error)
            document.getElementById('locationSearch').style.border = '1px solid red'
          }
        }

        const getData = () => {
          if(func === 'locations') {
            getLocations()
          }
        }
        
        const debounce = (wait: number) => {
          if(timer) {
            clearTimeout(timer)
          }

          setTimer(setTimeout(() => {
            getData()
            // console.log('data')
          }, wait))
          
        }

  return (
    <Combobox
      as="div"
      value={selectedLocation}
      onChange={(location) => {
        setLocationSearch('')
        setSelectedLocation(location)
      }}
    >
      <div className="relative w-1/2 md:w-72">
        <Combobox.Input
          className="w-full rounded-l-full border-0 py-1 pl-3 pr-2 text-gray-900 ring-inset ring-gray-300 focus:ring-inset focus:ring-blue-200 focus:outline-none text-xs sm:leading-6"
          id='locationSearch'
          displayValue={(selectedLocation: string) => selectedLocation}
          placeholder='Location'
          onChange={(e) => {debounce(1000); setLocationSearch(e.target.value)}}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {searchData.predictions?.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-[200%] md:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {searchData.predictions.map((location: any) => (
              <Combobox.Option
                key={location.description}
                value={location.description}
                onClick={() => setSelectedLocation(location.description)}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-blue-200 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected && 'font-semibold')}>{location.description}</span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-blue-200'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}