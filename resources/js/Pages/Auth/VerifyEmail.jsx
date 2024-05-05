import {Head, Link} from "@inertiajs/react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

export default function VerifyEmail({status, logo}) {



    return (
        <div className={'w-full h-[100vh] bg-slate-100 flex flex-col items-center'}>
            <Head title={'Verifikasi Email'}/>
            <div className={'w-[20rem]'}>
                <img src={logo} alt=""/>
            </div>
            <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-t-primary border-2 bg-white'}>
                <h1 className={'text-2xl font-bold my-2 text-center'}>Verifikasi Email</h1>
                <div className={'mb-4'}>
                {status === 'verification-link-sent' && <p className={'text-center text-green-500'}>Link verifikasi telah dikirim ulang ke email anda</p>}
                {status !== 'verification-link-sent' && <p className={'text-center text-gray-400'}>Link verifikasi telah dikirim ke email anda</p>}
                </div>
                <div className={'mb-6'}>
                    <Link method={'post'} as={'button'} className={'w-full bg-primary text-white p-2 rounded-lg'} href={route('verification.send')}>Kirim Ulang Email Verifikasi
                    </Link>
                </div>
            </div>
        </div>
    );
}
