function ProgramCatalogCard({ program, jadwal, price, onClick }) {
    const iconProgram = {
        "Angkat Beban": "/assets/img/exercise-weight.png",
        Yoga: "/assets/img/exercise-yoga.png",
        Zumba: "/assets/img/exercise-zumba.png",
        Kardio: "/assets/img/exercise-boxing.png",
    };

    return (
        <div
            onClick={onClick}
            className={`flex w-full items-center gap-2 rounded-lg p-4 outline-dashed outline-2 outline-lime-500 transition-all duration-300 hover:bg-lime-700 hover:bg-opacity-20 hover:outline-lime-400 `}
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-slate-800">
                <img src={iconProgram[program]} alt={program} />
            </div>
            <div className="ml-2">
                <h5 className="text-xl font-bold text-slate-100">{program}</h5>
                <p className="text-sm text-lime-500">{jadwal}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

ProgramCatalogCard.defaultProps = {
    program: "Angkat Beban",
};

export default ProgramCatalogCard;
