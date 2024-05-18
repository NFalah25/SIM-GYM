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
        <>
            <div
                className={'w-full min-h-[100vh] bg-[#020617] flex flex-col items-center justify-center '}>
                <div className={'xl:w-1/4 sm:w-1/2 w-full px-10 py-5 rounded-lg border-dashed border-2 border-[#84CC16] bg-[#020617]'}>
                    <Head title={'Login'}/>
                    <div className={'justify-center flex mt-4'}>
                        <img src={logo} alt=""/>
                    </div>
                    <h1 className={'text-2xl font-bold my-2 text-center'}>Login</h1>
                    <p className={'text-center dark:text-white'}>Login to your account</p>
                    <form onSubmit={submit} className={'mt-2'}>
                        <div className={'mb-4'}>
                            <Input placeholder={'Email'} type={'email'} name={'email'} id={'email'} value={data.email}
                                   onChange={(e) => setData('email', e.target.value)}/>
                            {errors.email && <div className={'text-red-700 text-sm '}>{errors.email}</div>}
                        </div>
                        <div className={'mb-4'}>
                            <Input placeholder={'Password'} type={'password'} name={'password'} id={'password'} value={data.password}
                                   onChange={(e) => setData('password', e.target.value)}/>
                            {errors.password && <div className={'text-red-700 text-sm'}>{errors.password}</div>}
                        </div>
                        <div className={'mb-4 flex justify-between'}>
                            <div>
                                <label htmlFor="remember_me"
                                       className={' text-sm text-gray-400'}>Remember me</label>
                                <input type="checkbox" name="remember" id="remember" onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                                       className={'mx-2 border border-gray-300 rounded-md shadow-sm focus:ring-lime-700 focus:border-lime-700 sm:text-sm text-lime-700'}/>
                            </div>
                            <div>
                                <Link className={'text-sm text-slate-400 hover:text-slate-500'}
                                      href={route('password.request')}>Forgot Password?</Link>
                            </div>

                        </div>
                        <div className={'mb-6'}>
                            <button type="submit" className={'w-full duration-150 bg-lime-500 hover:bg-lime-700 text-white p-2 rounded-lg'}>Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='mt-8'>
                    <p className={'text-gray-300'}>Tidak punya akun? <Link href={route('register')}
                                                                           className={'text-[#84CC16] hover:text-lime-700'}>Register</Link>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Login;
