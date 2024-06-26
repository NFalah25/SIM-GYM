import { createContext, useContext } from "react";
import Button from "./Button";
import { useForm } from "@inertiajs/react";

const TableContext = createContext();

function Table({ columns, children }) {
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

function CommonRow({ columns, children, className }) {
    return (
        <div
            className={`grid w-[800px] items-center transition-none md:w-full ${className}`}
            style={{ gridTemplateColumns: columns }}
        >
            {children}
        </div>
    );
}

function Header({ children }) {
    const columns = useContext(TableContext);
    return (
        <CommonRow
            columns={columns}
            className="p-4 font-semibold tracking-wider text-center uppercase border-b border-gray-600 bg-slate-700 text-slate-300"
            role="row"
            as="header"
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

function Body({ data, tbody }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        console.log("Deleting ID:", id); // Debug: cek ID yang diterima
        if (window.confirm("Are you sure you want to delete this item?")) {
            const url = route("users.destroy", id);
            console.log("Generated URL:", url); // Debug: cek URL yang dihasilkan
            destroy(url, {
                onSuccess: () => {
                    toast.success("User deleted successfully");
                },
                onError: () => {
                    toast.error("Error deleting user");
                },
            });
        }
    };
    if (!tbody && !data) {
        return (
            <p className="my-[250px] text-center text-lg font-medium text-slate-400">
                No data to show at this moment
            </p>
        );
    } else if (data) {
        return (
            <div className="my-1 divide-y divide-slate-600">
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
            </div>
        );
    } else if (!data && tbody) {
        return (
            <div className="my-1 w-[800px] divide-y divide-slate-600 md:w-full">
                {tbody.map((item, index) => (
                    <Row key={index}>
                        {Object.entries(item)
                            .filter(([key, value]) => key !== "id")
                            .map(([key, value], index) => (
                                <p className="px-2 truncate" key={index}>
                                    {value}
                                </p>
                            ))}
                        <div className="flex flex-col items-center md:flex-col lg:flex-row">
                            <Button
                                type="icon-edit"
                                target={`/users/${item.id}/edit`}
                                aria-label="Edit"
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
                            </Button>
                            <Button type="icon-view" aria-label="View">
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
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </Button>
                            <button
                                // type="icon-delete"
                                aria-label="Delete"
                                onClick={() => handleDelete(item.id)}
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
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Row>
                ))}
            </div>
        );
    }
}

function BodyProgram({ data, tbody }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        console.log("Deleting ID:", id); // Debug: cek ID yang diterima
        if (window.confirm("Are you sure you want to delete this item?")) {
            const url = route("program.destroy", id);
            console.log("Generated URL:", url); // Debug: cek URL yang dihasilkan
            destroy(url, {
                onSuccess: () => {
                    toast.success("Program deleted successfully");
                },
                onError: () => {
                    toast.error("Error deleting user");
                },
            });
        }
    };
    if (!tbody && !data) {
        return (
            <p className="my-[250px] text-center text-lg font-medium text-slate-400">
                No data to show at this moment
            </p>
        );
    } else if (data) {
        return (
            <div className="my-1 divide-y divide-slate-600">
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
                <Row>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <Button>Detail</Button>
                </Row>
            </div>
        );
    } else if (!data && tbody) {
        return (
            <div className="my-1 w-[800px] divide-y divide-slate-600 md:w-full">
                {tbody.map((item, index) => (
                    <Row key={index}>
                        {Object.entries(item)
                            .filter(([key, value]) => key !== "id")
                            .map(([key, value], index) => (
                                <p className="px-2 truncate" key={index}>
                                    {value}
                                </p>
                            ))}
                        <div className="flex flex-col items-center md:flex-col lg:flex-row">
                            <Button
                                type="icon-edit"
                                target={`/program/${item.id}/edit`}
                                aria-label="Edit"
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
                            </Button>
                            <Button type="icon-view" aria-label="View">
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
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </Button>
                            <button
                                // type="icon-delete"
                                aria-label="Delete"
                                onClick={() => handleDelete(item.id)}
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
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Row>
                ))}
            </div>
        );
    }
}

function Footer({ children }) {
    return (
        <footer
            className={`flex w-[800px]  justify-between rounded-b-lg bg-slate-700 p-4 text-slate-300 md:w-full ${!children && "hidden"}`}
        >
            {children}
        </footer>
    );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.BodyProgram = BodyProgram;
Table.Footer = Footer;

export default Table;
