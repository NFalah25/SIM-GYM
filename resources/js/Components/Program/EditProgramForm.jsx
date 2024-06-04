import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import Label from "@/Pages/Component/Label";
import Input from "@/Pages/Component/Input";

function EditProgramForm() {
    const { props } = usePage();
    const program = props.program;
    console.log(program)

    const { data, setData, put, processing, errors } = useForm({
        nama_program: program.nama_program || "",
        durasi: program.durasi || "",
        harga: program.harga || "",
        deskripsi: program.deskripsi || "",
    });
    console.log(data)

    function submit(e) {
        e.preventDefault();
        put(route("program.update", program.id), {
            onSuccess: () => {
                toast.success("Program updated successfully");
            },
            onError: () => {
                toast.error("There was an error updating the program");
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
            <div className="w-full p-4 space-y-10 rounded-xl bg-slate-800 md:p-8 lg:p-10">
            <div className="flex flex-col gap-4">
            <div className="w-full">
                            <Label value="Nama Program" htmlFor="nama_program" />
                            <Input
                                type="text"
                                name="nama_program"
                                id="nama_program"
                                value={data.nama_program}
                                onChange={(e) =>
                                    setData("nama_program", e.target.value)
                                }
                                error={errors.nama_program}
                            />
                        </div>
                        <div className="w-full">
                            <Label value="Durasi (bulan)" htmlFor="durasi" />
                            <Input
                                type="number"
                                name="durasi"
                                id="durasi"
                                value={data.durasi}
                                onChange={(e) =>
                                    setData("durasi", e.target.value)
                                }
                                error={errors.durasi}
                            />
                        </div>
                        <div className="w-full">
                            <Label value="Harga (Rp)" htmlFor="harga" />
                            <Input
                                type="number"
                                name="harga"
                                id="harga"
                                value={data.harga}
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                                error={errors.harga}
                            />
                        </div>
                        <div className="w-full">
                            <Label value="Deskripsi" htmlFor="deskripsi" />
                            <Input
                                type="text"
                                name="deskripsi"
                                id="deskripsi"
                                value={data.deskripsi}
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                                error={errors.deskripsi}
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

export default EditProgramForm;
