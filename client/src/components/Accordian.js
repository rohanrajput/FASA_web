import React, { useState } from 'react'
import SelectFromExamples from './SelectFromExamples';
import SelectFromUploads from './SelectFromUploads';
import { useFileDispatch } from '../context/FileContext';

const Accordian = () => {
  const [accordian, setAccordian] = useState("0");
  const [,,,, restFilesHandler] = useFileDispatch();

  const toggleAccordian = (id) => {
    if(accordian === id) {
        setAccordian("0");
    } else {
        setAccordian(id);
    }

    restFilesHandler();
  }

  return (
    <div>
        <ul class="flex flex-col">
            <li class="bg-white my-2 shadow-lg">
                <h2 onClick={ () => toggleAccordian("1") }
                    class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer border"
                    >
                    <span>Select from examples</span>
                    <svg
                    class={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 + ${accordian === "1" && "rotate-180"}`}
                    viewBox="0 0 20 20"
                    >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                </h2>

                <div
                className={`border-l-2 border-purple-600 overflow-auto ease-in-out duration-700 transition-all ${accordian==="1" ? "max-h-[500px]" : "max-h-0"}`}
                >
                    <SelectFromExamples />
                </div>
            </li>

            <li class="bg-white my-2 shadow-lg">
                <h2 onClick={ () => toggleAccordian("2") }
                    class="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer border"
                    >
                    <span>Upload your files</span>
                    <svg
                    class={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 + ${accordian === "2" && "rotate-180"}`}
                    viewBox="0 0 20 20"
                    >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                </h2>

                <div
                className={`border-l-2 border-purple-600 overflow-hidden ease-in-out duration-700 transition-all + ${accordian==="2" ? "max-h-[960px]" : "max-h-0"}`}
                >
                    <SelectFromUploads />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Accordian;