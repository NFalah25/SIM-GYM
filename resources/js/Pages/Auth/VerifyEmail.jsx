import {Head, Link} from "@inertiajs/react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

export default function VerifyEmail({status, logo}) {



    return (
        <div className={'w-full h-[100vh] bg-[#020617] flex flex-col items-center justify-center'}>
            <Head title={'Verifikasi Email'}/>
            <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-lime-500 border-dashed border-2'}>
            <div className={'justify-center flex my-5'}>
                <img src={logo} alt=""/>
            </div>
                <h1 className={'text-2xl text-white font-bold my-2 text-center'}>Verifikasi Email</h1>
                <div className={'mb-4'}>
                {status === 'verification-link-sent' && <p className={'text-center text-green-500'}>Link verifikasi telah dikirim ulang ke email anda</p>}
                {status !== 'verification-link-sent' && <p className={'text-center text-slate-400'}>Link verifikasi telah dikirim ke email anda</p>}
                </div>
                <div className={'mb-6'}>
                    <Link method={'post'} as={'button'} className={'w-full bg-lime-500 hover:bg-lime-700 duration-150 text-white p-2 rounded-lg'} href={route('verification.send')}>Kirim Ulang Email Verifikasi
                    </Link>
                </div>
            </div>
        </div>
    );
}
