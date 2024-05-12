import Logo from "./Logo";

export default function Sidebar() {
    return (
        <div className="max-w-[20rem] min-h-[100vh] bg-white">
            <div className="text-center justify-center flex">
                    <h1 className="hidden">LaraGym</h1>
                <Logo className={'w-1/2'} />
            </div>
        </div>
    );
}
