import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/react";
import ButtonNew from "@/Components/ButtonNew.jsx";
import ConfirmModal from "@/Components/ConfirmModal.jsx";

const TableContext = createContext();

function TableNewPresensiTrainer({ columns, children }) {
    return (
        <TableContext.Provider value={columns}>
            <div
                className="overflow-x-auto border rounded-t-lg whitespace-nowrap border-slate-800 bg-slate-800 md:w-full md:overflow-hidden lg:w-full"
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
            className="p-4 font-semibold tracking-wider text-center uppercase border-b border-gray-600 bg-slate-700 text-slate-300"
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
                                <p className="px-2 truncate" key={index}>
                                    {value}
                                </p>
                            ))}
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

TableNewPresensiTrainer.Header = Header;
TableNewPresensiTrainer.Row = Row;
TableNewPresensiTrainer.Body = Body;
TableNewPresensiTrainer.Footer = Footer;

export default TableNewPresensiTrainer;
