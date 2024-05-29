import Button from "@/Components/Button";
import Table from "@/Components/Table";
import Dashboard from "@/Pages/Dashboard";

function JadwalCreate() {
    return (
        <Dashboard>
            <h2 className="font-poppins text-2xl font-bold text-slate-100 mb-3">
                Add Jadwal
            </h2>

        <Table>
        <form action="" method="post" className="text-slate-100 m-5">
        <div className="p-4 mb-5">
        <div className="mb-4">
            <label className="block text-sm font-medium text-white">Nomor:</label>
            <input type="text" id="nomor" name="nomor" className="mt-1 p-2 bg-slate-900 text-slate-100 border border-gray-300 rounded-md w-full focus:border-slate-600"/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-white">Hari:</label>
            <input type="text" id="hari" name="hari" className="mt-1 p-2 bg-slate-900 text-slate-100 border border-gray-300 rounded-md w-full focus:border-slate-600"/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-white">Waktu:</label>
            <input type="text" id="waktu" name="waktu" className="mt-1 p-2 bg-slate-900 text-slate-100 border border-gray-300 rounded-md w-full focus:border-slate-600"/>
        </div>
        <div className="mb-4">
            <label className="block text-sm font-medium text-white">Ruangan:</label>
            <input type="text" id="ruangan" name="ruangan" className="mt-1 p-2 bg-slate-900 text-slate-100 border border-gray-300 rounded-md w-full focus:border-slate-600"/>
        </div>
        </div>
        <Button type="submit">Submit</Button>
        </form>
        </Table>

        </Dashboard>
    );
}

export default JadwalCreate; 