import { useForm } from "@inertiajs/react";
import Label from "../Label.jsx";
import Input from "../Input.jsx";
import { toast } from "react-toastify";
import ButtonNew from "../ButtonNew.jsx";
import { usePage } from "@inertiajs/react";

function CreatePresensiForm() {
    const { props } = usePage();
    const user = props.auth.user;

    const { data, setData, post, processing, errors } = useForm({
        user: "",
        jadwal: "",
        langganan: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/presensi", {
            onSuccess: () => {
                toast.success("Presensi created successfully");
            },
            onError: () => {
                toast.error("There was an error creating the presensi");
            },
        });
    };

    return (
        <form onSubmit={submit} method="POST" className="w-full">
            <div className="w-full p-4 space-y-10 rounded-xl bg-slate-800 md:p-8 lg:p-10">
                <div className="flex flex-col gap-4">
                    <div className="w-full">
                            <Label value="Jadwal" htmlFor="jadwal" />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name="jadwal"
                                id="jadwal"
                                value={data.jadwal}
                                onChange={(e) =>
                                    setData("jadwal", e.target.value)
                                }
                            >
                                {/* <option value="">Pilih jadwal</option>
                                    {jadwal.map ((jadwal) => (
                                <option value={jadwal.id}>{jadwal.nama_jadwal}</option>
                                ))} */}
                            </select>
                            {errors.jadwal && (
                                <div className="mt-2 text-sm text-red-700">
                                    {errors.jadwal}
                                </div>
                            )}
                    </div>
                    <div className="w-full">
                            <Label value="Langganan" htmlFor="langganan" />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name="langganan"
                                id="langganan"
                                value={data.langganan}
                                onChange={(e) =>
                                    setData("langganan", e.target.value)
                                }
                            >
                                {/* <option value="">Pilih jadwal</option>
                                    {jadwal.map ((jadwal) => (
                                <option value={jadwal.id}>{jadwal.nama_jadwal}</option>
                                ))} */}
                            </select>
                            {errors.langganan && (
                                <div className="mt-2 text-sm text-red-700">
                                    {errors.langganan}
                                </div>
                            )}
                    </div>
            </div>
                <div className="flex justify-end">
                    <ButtonNew type="submit" size="large" disabled={processing}>
                        {processing ? "Processing..." : "Create Presensi"}
                    </ButtonNew>
                </div>
            </div>
        </form>
    );
}

export default CreatePresensiForm;
