import {Head, Link, useForm} from "@inertiajs/react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

export default function ForgotPassword({logo, status}) {
    const {data, setData, post, processing} = useForm({
        email: '',
    })

function submit(e) {
        e.preventDefault()
        post('/forgot-password')
}

    return (
        <div className={'w-full h-[100vh] bg-slate-100 flex flex-col items-center'}>
            <Head title={'Reset Password'}/>
            <div className={'w-[20rem]'}>
                <img src={logo} alt=""/>
            </div>
            <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-t-primary border-2 bg-white'}>
                <h1 className={'text-2xl font-bold my-2 text-center'}>Reset Password</h1>
                <p className={'text-gray-700'}>Kami akan mengirimkan link reset password melalui email anda</p>
                {status && <p className={'text-green-700'}>Link reset password telah dikirim ke email anda</p>}
                <form onSubmit={submit} className={'mt-2'}>
                    <div className={'mb-4'}>
                        <Label value={'Email'} htmlFor={'email'}/>
                        <Input type={'email'} name={'email'} id={'email'} value={data.email}
                               onChange={(e) => setData('email', e.target.value)}/>
                    </div>
                    <div className={'mb-6'}>
                        <button type="submit" className={'w-full bg-primary text-white p-2 rounded-lg'}>Login
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}
