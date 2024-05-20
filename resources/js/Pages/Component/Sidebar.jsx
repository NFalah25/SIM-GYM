import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
    return (
        <div className="min-h-[100vh] w-[250px] bg-slate-950">
            <div className="flex flex-col items-center py-20 text-center">
                <h1 className="hidden">Zeus Physique</h1>
                <Logo className="mb-16" />
                <MainNav />
            </div>
        </div>
    );
}
