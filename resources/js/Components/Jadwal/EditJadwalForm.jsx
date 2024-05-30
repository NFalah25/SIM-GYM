import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import Label from "@/Pages/Component/Label";
import Input from "@/Pages/Component/Input";

function EditJadwalForm() {
    const { props } = usePage();
    const jadwal = props.jadwal;
    const user = props.user;
    const program = props.program;

    const { data, setData, put, processing, errors } = useForm({
        name: jadwal.id_user || "",
        program: jadwal.id_program || "",
        hari: jadwal.hari || "",
        waktu_mulai: jadwal.waktu_mulai || "",
        waktu_selesai: jadwal.waktu_selesai || "",
        ruangan: jadwal.nama_ruangan || "",
    });

    function submit(e) {
        e.preventDefault();
        put(route("jadwal.update", jadwal.id), {
            onSuccess: () => {
                toast.success("Jadwal updated successfully");
            },
            onError: () => {
                toast.error("There was an error updating the jadwal");
            },
        });
    }; 

    return (
        <form
            onSubmit={submit}
            className="w-full"
            encType="multipart/form-data"
        >
            <input type="hidden" name="_method" value="PUT" />
            <div className="w-full space-y-10 rounded-xl bg-slate-800 p-4 md:p-8 lg:p-10">
            <div className="flex flex-col gap-4">
                    <div className="w-full">
                        <Label value="Nama Trainer" htmlFor="name" />
                        <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name="name"
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                        >
                            <option value="">Pilih User</option>
                                {user.map ((user) => (
                                <option value={user.id} selected={jadwal.id_user == user.id ? 'selected' : ''}>{user.name}</option>
                                ))}
                        </select>
                            {errors.name && (
                                <div className="mt-2 text-sm text-red-700">
                                    {errors.name}
                                </div>
                            )}
                    </div>
                    <div className="w-full">
                            <Label value="Nama Program" htmlFor="program" />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-2 p-3 text-white"
                                name="program"
                                id="program"
                                value={data.program}
                                onChange={(e) =>
                                    setData("program", e.target.value)
                                }
                            >
                                <option value="">Pilih Program</option>
                                {program.map ((program) => (
                                <option value={program.id} selected={jadwal.id_program == program.id ? 'selected' : ''}>{program.nama_program}</option>
                                ))}
                            </select>
                            {errors.program && (
                                <div className="mt-2 text-sm text-red-700">
                                    {errors.program}
                                </div>
                            )}
                    </div>
                    <div className="w-full">
                            <Label value="Hari" htmlFor="hari" />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-2 p-3 text-white"
                                name="hari"
                                id="hari"
                                value={data.hari}
                                onChange={(e) =>
                                    setData("hari", e.target.value)
                                }
                            >
                                <option value="">Pilih Hari</option>
                                <option value="Senin" selected={jadwal.hari == 'Senin' ? 'selected' : ''}>Senin</option>
                                <option value="Selasa" selected={jadwal.hari == 'Selasa' ? 'selected' : ''}>Selasa</option>
                                <option value="Rabu" selected={jadwal.hari == 'Rabu' ? 'selected' : ''}>Rabu</option>
                                <option value="Kamis" selected={jadwal.hari == 'Kamis' ? 'selected' : ''}>Kamis</option>
                                <option value="Jumat" selected={jadwal.hari == 'Jumat' ? 'selected' : ''}>Jumat</option>
                                <option value="Sabtu" selected={jadwal.hari == 'Sabtu' ? 'selected' : ''}>Sabtu</option>
                                <option value="Minggu" selected={jadwal.hari == 'Minggu' ? 'selected' : ''}>Minggu</option>
                                
                            </select>
                            {errors.hari && (
                                <div className="mt-2 text-sm text-red-700">
                                    {errors.hari}
                                </div>
                            )}
                        </div>
                        <div className="w-full">
                            <Label value="Waktu Mulai" htmlFor="waktu_mulai" />
                            <Input
                                type="time"
                                name="waktu_mulai"
                                id="waktu_mulai"
                                value={data.waktu_mulai}
                                onChange={(e) =>
                                    setData("waktu_mulai", e.target.value)
                                }
                                error={errors.waktu_mulai}
                            />
                        </div>
                        <div className="w-full">
                            <Label value="Waktu Selesai" htmlFor="waktu_selesai" />
                            <Input
                                type="time"
                                name="waktu_selesai"
                                id="waktu_selesai"
                                value={data.waktu_selesai}
                                onChange={(e) =>
                                    setData("waktu_selesai", e.target.value)
                                }
                                error={errors.waktu_selesai}
                            />
                        </div>
                        <div className="w-full">
                            <Label value="Ruangan" htmlFor="ruangan" />
                            <Input
                                type="text"
                                name="ruangan"
                                id="ruangan"
                                value={data.ruangan}
                                onChange={(e) =>
                                    setData("ruangan", e.target.value)
                                }
                                error={errors.ruangan}
                            />
                        </div>
            </div>
            <div className={"mt-6 flex w-full justify-end"}>
                    <button
                        type={"submit"}
                        disabled={processing}
                        className={
                            "inline-flex items-center justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-semibold text-white transition duration-150 ease-in-out hover:bg-lime-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:opacity-25"
                        }
                    >
                        {processing ? "Processing..." : "Simpan"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditJadwalForm;
