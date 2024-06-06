import Header from "./Header";
import MemberSidebar from "./MemberSidebar";

export default function LayoutMember({ children }) {
    return (
        <>
            <div className="flex h-screen w-full bg-slate-950 lg:bg-slate-900">
                <div className="hidden sm:hidden md:hidden lg:block">
                    <MemberSidebar />
                </div>
                <div className="w-full space-y-10 overflow-scroll">
                    <Header />
                    <div className="mx-auto h-auto max-w-[90%]">{children}</div>
                </div>
            </div>
        </>
    );
}
