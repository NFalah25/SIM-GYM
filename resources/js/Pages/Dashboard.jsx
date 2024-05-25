import { Link } from "@inertiajs/react";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";

export default function Dashboard({ user, children }) {
    function submit(e) {
        e.preventDefault();
        post("/logout");
    }

    return (
        <>
            <div className="flex h-screen w-full bg-slate-900">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full space-y-10 overflow-scroll">
                    <Header user={user} />
                    <div className="mx-auto h-auto max-w-[90%]">{children}</div>
                </div>
            </div>
        </>
    );
}
