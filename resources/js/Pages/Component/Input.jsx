import {clsx} from "clsx";

export default function Input({type='text', className, ...props}){
    return (
        <input {...props} type={type}
               className={clsx(
                   className,'mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
               )}/>
    )
}
