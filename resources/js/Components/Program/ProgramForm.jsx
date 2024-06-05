import { useForm } from "@inertiajs/react";
import Label from "../Label.jsx";
import Input from "../Input.jsx";
import { toast } from "react-toastify";
import ButtonNew from "../ButtonNew.jsx";

function ProgramForm() {
    const { data, setData, post, processing, errors } = useForm({
        nama_program: "",
        durasi: "",
        harga: "",
        deskripsi: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/program", {
            onSuccess: () => {
                toast.success("Program created successfully");
            },
            onError: () => {
                toast.error("There was an error creating the program");
            },
        });
    }; 

    return (
        <form onSubmit={submit} method="POST" className="w-full">
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
                <div className="flex justify-end">
                    <ButtonNew type="submit" size="large" disabled={processing}>
                        {processing ? "Processing..." : "Create Program"}
                    </ButtonNew>
                </div>
            </div>
        </form>
    );
}

export default ProgramForm;