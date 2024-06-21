import Header from "./Header";
import TrainerSidebar from "./TrainerSidebar";

export default function LayoutTrainer({ children }) {
    return (
        <>
            <div className="flex w-full h-screen bg-slate-950 lg:bg-slate-900">
                <div className="hidden sm:hidden md:hidden lg:block">
                    <TrainerSidebar />
                </div>
                <div className="w-full space-y-10 overflow-scroll">
                    <Header />
                    <div className="mx-auto h-auto max-w-[90%]">{children}</div>
                </div>
            </div>
        </>
    );
}
