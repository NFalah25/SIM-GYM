import logo from '../../../../public/assets/img/Logo.png'

export default function Logo({...props}) {
    return (
        <img src={logo} {...props} />
    )
}
