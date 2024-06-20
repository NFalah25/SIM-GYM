import { useForm } from "@inertiajs/react";
import Label from "../Label.jsx";
import Input from "../Input.jsx";
import { toast } from "react-toastify";
import ButtonNew from "../ButtonNew.jsx";

function JadwalForm({user, program}) {
    const { data, setData, post, processing, errors } = useForm({
        user: "",
        program: "",
        hari: "",
        waktu_mulai: "",
        waktu_selesai: "",
        ruangan: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/jadwal", {
            onSuccess: () => {
                toast.success("Jadwal created successfully");
            },
            onError: () => {
                toast.error("There was an error creating the jadwal");
            },
        });
    };

    return (
        <form onSubmit={submit} method="POST" className="w-full">
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
                            <option value="">Pilih Trainer</option>
                            {user.map ((user) => (
                                <option value={user.id}>{user.name}</option>
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
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name="program"
                                id="program"
                                value={data.program}
                                onChange={(e) =>
                                    setData("program", e.target.value)
                                }
                            >
                                <option value="">Pilih Program</option>
                                    {program.map ((program) => (
                                <option value={program.id}>{program.nama_program}</option>
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
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name="hari"
                                id="hari"
                                value={data.hari}
                                onChange={(e) =>
                                    setData("hari", e.target.value)
                                }
                            >
                                <option value="">Pilih Hari</option>
                                <option value="Senin">Senin</option>
                                <option value="Selasa">Selasa</option>
                                <option value="Rabu">Rabu</option>
                                <option value="Kamis">Kamis</option>
                                <option value="Jumat">Jumat</option>
                                <option value="Sabtu">Sabtu</option>
                                <option value="Minggu">Minggu</option>
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
                <div className="flex justify-end">
                    <ButtonNew type="submit" size="large" disabled={processing}>
                        {processing ? "Processing..." : "Create Jadwal"}
                    </ButtonNew>
                </div>
            </div>
        </form>
    );
}

export default JadwalForm;
