import Pagination from "../Pagination";
import TableNew from "../TableNew";
import TableNewPresensiTrainer from "@/Components/Presensi/TableNewPresensiTrainer.jsx";

function PresensiTableTrainer({ thead, tbody, basePath, columns, pagination }) {

    {tbody.map ((item) => (
        console.log (item.id)
    ))}
    return (
        <>
            <TableNewPresensiTrainer columns={columns}>
                <TableNewPresensiTrainer.Header>
                    {thead.map((column, index) => (
                        <div key={index}>{column}</div>
                    ))}
                </TableNewPresensiTrainer.Header>
                {
                  tbody && <TableNewPresensiTrainer.Body tbody={tbody} basePath={basePath} />
                }
                <TableNewPresensiTrainer.Footer>
                    <Pagination pagination={pagination} />
                </TableNewPresensiTrainer.Footer>
            </TableNewPresensiTrainer>
        </>
    );
}

export default PresensiTableTrainer;
