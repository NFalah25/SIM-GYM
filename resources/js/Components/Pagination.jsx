import { router } from "@inertiajs/react";
import ButtonNew from "./ButtonNew";
function Pagination({ pagination }) {
    const handlePageChange = (url) => {
        if (url) {
            router.get(url);
        }
    };
    return (
        <div className="flex w-full flex-col justify-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm">
                Showing <span className="font-semibold">{pagination.from}</span>{" "}
                to <span className="font-semibold">{pagination.to}</span> of{" "}
                <span className="font-semibold">{pagination.total}</span>{" "}
                entries
            </p>
            <div className="flex gap-4">
                <ButtonNew
                    variant="secondary"
                    onClick={() => handlePageChange(pagination.prev_page_url)}
                    disabled={!pagination.prev_page_url}
                >
                    Previous
                </ButtonNew>
                <ButtonNew
                    variant="secondary"
                    onClick={() => handlePageChange(pagination.next_page_url)}
                    disabled={!pagination.next_page_url}
                >
                    Next
                </ButtonNew>
            </div>
        </div>
    );
}

export default Pagination;
