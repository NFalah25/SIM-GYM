import {Head, Link, useForm} from '@inertiajs/react'
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";

function Login({logo}) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
        password: '',
        remember: false,
    })

    function submit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <div className={'w-full min-h-[100vh] bg-slate-100 flex flex-col items-center'}>
            <Head title={'Login'}/>
            <div className={'w-[20rem]'}>
                <img src={logo} alt=""/>
            </div>
            <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-t-primary border-2 bg-white'}>
                <h1 className={'text-2xl font-bold my-2 text-center'}>Login</h1>
                <p className={'text-center text-gray-700'}>Login to your account</p>
                <form onSubmit={submit} className={'mt-2'}>
                    <div className={'mb-4'}>
                        <Label value={'Email'} htmlFor={'email'}/>
                        <Input type={'email'} name={'email'} id={'email'} value={data.email} onChange={(e)=> setData('email', e.target.value)}/>
                        {errors.email && <div className={'text-red-700 text-sm '}>{errors.email}</div>}
                    </div>
                    <div className={'mb-4'}>
                        <Label value={'Password'} htmlFor={'password'}/>
                        <Input type={'password'} name={'password'} id={'password'} value={data.password} onChange={(e)=> setData('password', e.target.value)}/>
                        {errors.password && <div className={'text-red-700 text-sm'}>{errors.password}</div>}
                    </div>
                    <div className={'mb-4 flex justify-between'}>
                        <div>
                            <label htmlFor="remember_me"
                                   className={' text-sm text-gray-700'}>Remember me</label>
                            <input type="checkbox" name="remember" id="remember" onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                                   className={'mx-2 border border-gray-300 rounded-md shadow-sm focus:ring-hover-primary focus:border-hover-primary sm:text-sm text-primary'}/>
                        </div>
                        <div>
                            <Link className={'text-sm text-slate-600 hover:text-black'}
                                  href={route('password.request')}>Forgot Password?</Link>
                        </div>

                    </div>
                    <div className={'mb-6'}>
                        <button type="submit" className={'w-full bg-primary text-white p-2 rounded-lg'}>Login
                        </button>
                    </div>
                </form>
            </div>
            <div className='mt-8'>
                <p className={'text-gray-700'}>Tidak punya akun? <Link href={route('register')}
                                                                         className={'text-primary hover:text-black'}>Register</Link>
                </p>
            </div>

        </div>
    )
}

export default Login;
