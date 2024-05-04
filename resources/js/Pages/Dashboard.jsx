import {Link} from "@inertiajs/react";

export default function Dashboard({auth}) {

    function submit(e) {
        e.preventDefault();
        post('/logout');
    }

    return (
        <>
            <h1>Dashboard</h1>
            <Link method={'post'} href={route('logout')} as={'button'}>Home</Link>

        </>
    )
}
