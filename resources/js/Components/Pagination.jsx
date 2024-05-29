import ButtonNew from "./ButtonNew";
function Pagination() {
    return (
        <div className="flex w-full flex-col justify-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm">
                Showing <span className="font-semibold">1</span> to{" "}
                <span className="font-semibold">10</span> of{" "}
                <span className="font-semibold">23</span> entries
            </p>
            <div className="flex gap-4">
                <ButtonNew variant="secondary">Previous</ButtonNew>
                <ButtonNew variant="secondary">Next</ButtonNew>
            </div>
        </div>
    );
}

export default Pagination;
