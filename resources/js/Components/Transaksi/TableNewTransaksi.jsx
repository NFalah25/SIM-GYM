import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import ButtonNew from "@/Components/ButtonNew.jsx";
import ConfirmModal from "@/Components/ConfirmModal.jsx";

const TableContext = createContext();

function TableNewTransaksi({ columns, children }) {
    return (
        <TableContext.Provider value={columns}>
            <div
                className="overflow-x-auto whitespace-nowrap rounded-t-lg border border-slate-800 bg-slate-800 md:w-full md:overflow-hidden lg:w-full"
                role="table"
            >
                {children}
            </div>
        </TableContext.Provider>
    );
}

function CommonRow({ columns, children, className, role }) {
    return (
        <div
            className={`grid w-[800px] items-center transition-none md:w-full ${className}`}
            style={{ gridTemplateColumns: columns }}
            role={role}
        >
            {children}
        </div>
    );
}

CommonRow.defaultProps = {
    className: "",
    role: "",
};

function Header({ children }) {
    const columns = useContext(TableContext);
    return (
        <CommonRow
            columns={columns}
            className="border-b border-gray-600 bg-slate-700 p-4 text-center font-semibold uppercase tracking-wider text-slate-300"
            role="rowheader"
        >
            {children}
        </CommonRow>
    );
}

function Row({ children }) {
    const columns = useContext(TableContext);
    return (
        <CommonRow
            columns={columns}
            className="w-full px-4 py-2 text-center text-slate-100"
            role="row"
        >
            {children}
        </CommonRow>
    );
}

function Body({ tbody, basePath }) {
    const { delete: destroy } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = (id) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        const url = route(`${basePath}.destroy`, selectedId);
        destroy(url, {
            onSuccess: () => {
                toast.success(`${basePath} deleted successfully`);
                setIsModalOpen(false);
            },
            onError: () => {
                toast.error(`Error deleting ${basePath}`);
                setIsModalOpen(false);
            },
        });
    };

    return (
        <>
            <div className="my-1 w-[800px] divide-y divide-slate-600 md:w-full">
                {tbody.map((item, index) => (
                    <Row key={index}>
                        {Object.entries(item)
                            .filter(([key]) => key !== "id")
                            .map(([key, value], index) => (
                                <p className="truncate px-2" key={index}>
                                    {value}
                                </p>
                            ))}
                        <div className="flex flex-col items-center md:flex-col lg:flex-row">
                            <ButtonNew
                                icon="iconEdit"
                                ariaLabel="Edit"
                                href={`/${basePath}/${item.id}/detail`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                            </ButtonNew>
                        </div>
                    </Row>
                ))}
            </div>
        </>
    );
}

Body.defaultProps = {
    tbody: [],
    basePath: "",
};

function Footer({ children }) {
    return (
        <footer
            className={`flex w-[800px] justify-between rounded-b-lg bg-slate-700 p-4 text-slate-300 md:w-full ${!children && "hidden"}`}
        >
            {children}
        </footer>
    );
}

Footer.defaultProps = {
    children: null,
};

TableNewTransaksi.Header = Header;
TableNewTransaksi.Row = Row;
TableNewTransaksi.Body = Body;
TableNewTransaksi.Footer = Footer;

export default TableNewTransaksi;
