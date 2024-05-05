import {Head, Link, router, useForm} from "@inertiajs/react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

export default function ResetPassword({logo, request, token}) {
    const email = request.email
    const {data, setData, errors, post, processing} = useForm({
        email: email,
        token: token,
        password: '',
        password_confirmation: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/reset-password')
    }

    return (
        <div className={'w-full h-[100vh] bg-slate-100 flex flex-col items-center'}>
            <Head title={'Reset Password'}/>
            <div className={'w-[20rem]'}>
                <img src={logo} alt=""/>
            </div>
            <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-t-primary border-2 bg-white'}>
                <h1 className={'text-2xl font-bold my-2 text-center'}>Login</h1>
                <p className={'text-center text-gray-700'}>Login to your account</p>
                <form onSubmit={submit} className={'mt-2'}>
                    <Input type={'hidden'} name={'token'} value={data.token} onChange={(e)=>setData('token', e.target.value)}/>
                    <div className={'mb-4'}>
                        <Label value={'Email'} htmlFor={'email'}/>
                        <Input className={'bg-slate-300 focus:border-0 focus:ring-0'} type={'email'} name={'email'} id={'email'} value={data.email}
                               onChange={(e) => setData('email', e.target.value)} readOnly={true}/>
                        {errors.email && <div className={'text-red-700 text-sm '}>{errors.email}</div>}
                    </div>
                    <div className={'mb-4'}>
                        <Label value={'Password'} htmlFor={'password'}/>
                        <Input type={'password'} name={'password'} id={'password'} value={data.password}
                               onChange={(e) => setData('password', e.target.value)}/>
                        {errors.password && <div className={'text-red-700 text-sm'}>{errors.password}</div>}
                    </div>
                    <div className={'mb-4'}>
                        <Label value={'Konfirmasi Password'} htmlFor={'password_confirmation'}/>
                        <Input type={'password'} name={'password_confirmation'} id={'password_confirmation'} value={data.password_confirmation}
                               onChange={(e) => setData('password_confirmation', e.target.value)}/>
                        {errors.password_confirmation && <div className={'text-red-700 text-sm'}>{errors.password_confirmation}</div>}
                    </div>
                    <div className={'mb-6'}>
                        <button type="submit" className={'w-full bg-primary text-white p-2 rounded-lg'}>Reset Password
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}
