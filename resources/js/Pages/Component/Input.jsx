import {clsx} from "clsx";

export default function Input({type='text', className, ...props}){
    return (
        <input {...props} type={type}
               className={clsx(
                   className,'mt-1 p-3 w-full border border-white bg-[#020617] placeholder:text-white placeholder:font-light placeholder:text-sm rounded-md shadow-sm sm:text-sm focus:ring-lime-500 focus:border-lime-500 text-white'
               )}/>
    )
}
