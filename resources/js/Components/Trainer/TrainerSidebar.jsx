import Logo from "../../Pages/Component/Logo";
import TrainerMainNav from "./TrainerMainNav";

export default function TrainerSidebar() {
    return (
        <div className="min-h-[100vh] w-[250px] bg-slate-950">
            <div className="flex flex-col items-center py-20 text-center">
                <h1 className="hidden">Zeus Physique</h1>
                <Logo className="mb-16" />
                <TrainerMainNav />
            </div>
        </div>
    );
}
