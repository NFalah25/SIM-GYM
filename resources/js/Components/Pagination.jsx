import Button from "./Button";
function Pagination() {
    return (
        <div className="flex w-full items-center justify-between">
            <p className="text-sm">
                Showing <span className="font-semibold">1</span> to{" "}
                <span className="font-semibold">10</span> of{" "}
                <span className="font-semibold">23</span> entries
            </p>
            <div className="flex gap-4">
                <Button>Previous</Button>
                <Button>Next</Button>
            </div>
        </div>
    );
}

export default Pagination;
