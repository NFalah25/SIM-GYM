import {Link} from "@inertiajs/react";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

export default function Dashboard({user}) {
    function submit(e) {
        e.preventDefault();
        post("/logout");
    }

    return (
        <>
            <div className="bg-slate-200 h-screen flex w-full">
                <div>
                    <Sidebar/>
                </div>
                <div className={'w-full'}>
                    <Navbar user={user}/>
                    <h1>Dashboard</h1>
                    <Link method={"post"} href={route("logout")} as={"button"}>
                        Home
                    </Link>
                </div>
            </div>
        </>
    );
}
