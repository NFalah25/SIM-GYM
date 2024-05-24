import {createContext, useContext} from "react";
import Button from "./Button";

const TableContext = createContext();

function Table({columns, children}) {
    return (
        <TableContext.Provider value={columns}>
            <div
                className="overflow-hidden rounded-t-lg border border-slate-800 bg-slate-800"
                role="table"
            >
                {children}
            </div>
        </TableContext.Provider>
    );
}

function CommonRow({columns, children, className}) {
    return (
        <div
            className={`grid items-center transition-none ${className}`}
            style={{gridTemplateColumns: columns}}
        >
            {children}
        </div>
    );
}

function Header({children}) {
    const columns = useContext(TableContext);
    return (
        <CommonRow
            columns={columns}
            className="border-b border-gray-600 bg-slate-700 p-4 text-center font-semibold uppercase tracking-wider text-slate-300"
            role="row"
            as="header"
        >
            {children}
        </CommonRow>
    );
}

function Row({children}) {
    const columns = useContext(TableContext);
    return (
        <CommonRow
            columns={columns}
            className="px-4 py-2 text-center text-slate-100"
            role="row"
        >
            {children}
        </CommonRow>
    );
}

function Body({tbody}) {
    console.log(tbody)
    if (tbody.length === 0)
        return (
            <p className="0 my-[250px] text-center text-lg font-medium text-slate-400">
                No data to show at this moment
            </p>
        );
    return (
        <div className="my-1 divide-y divide-slate-600">

            {tbody.map((item, index) => (
                <Row key={index}>
                    {Object.values(item).map((value, index) => (
                        <div key={index}>{value}</div>
                    ))}
                    <div>
                        <Button
                            className="bg-slate-700 hover:bg-slate-600"
                            icon="edit"
                            aria-label="Edit"
                        >Edit</Button>
                        <Button
                            className="bg-yellow-400 hover:bg-slate-600"
                            icon="eye"
                            aria-label="View"
                        >View</Button>
                        <Button
                            className="bg-red-700 hover:bg-red-600"
                            icon="delete"
                            aria-label="Delete"
                        >Delete</Button>
                    </div>
                </Row>
            ))}

        </div>
    );
}

function Footer({children}) {
    return (
        <footer
            className={`flex justify-between rounded-b-lg bg-slate-700 p-4 text-slate-300 ${!children && "hidden"}`}
        >
            {children}
        </footer>
    );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
