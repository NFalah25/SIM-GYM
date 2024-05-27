import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Label from "@/Pages/Component/Label.jsx";
import Input from "@/Pages/Component/Input.jsx";
import { toast } from "react-toastify";

function UserForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        address: "",
        phone_number: "",
        height: "",
        weight: "",
        gender: "",
        role: "",
        date_of_birth: "",
        foto: null,
        remember: false,
    });

    const [photoPreview, setPhotoPreview] = useState(
        "../assets/profile_photo/default_photo_profile.jpg",
    );

    function submit(e) {
        e.preventDefault();
        post("/users", {
            onSuccess: () => {
                toast.success("User created successfully");
            },
            onError: () => {
                toast.error("There was an error creating the user");
            },
        });
    }

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("foto", file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <form onSubmit={submit} method="POST" className="w-full">
            <div className="w-full space-y-10 rounded-xl bg-slate-800 p-4 md:p-8 lg:p-10">
                {" "}
                <div className="w-full">
                    <div className="flex flex-col items-center gap-5">
                        <img
                            src={photoPreview}
                            alt="profile"
                            className="h-[150px] w-[150px] rounded-full bg-red-50"
                        />
                        <label
                            htmlFor="foto"
                            className="rounded bg-slate-400 px-3 py-2 text-slate-100 transition-all duration-300 hover:bg-slate-500"
                        >
                            Upload Avatar
                        </label>
                        <input
                            type="file"
                            id="foto" // Changed from 'avatar' to 'foto'
                            className="hidden"
                            onChange={handlePhotoChange}
                        />
                    </div>
                </div>
                {/* Batas */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div className={"w-full"}>
                            <Label value={"Nama Awal"} htmlFor={"first_name"} />
                            <Input
                                type={"text"}
                                name={"first_name"}
                                id={"first_name"}
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                            {errors.first_name && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.first_name}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Username"} htmlFor={"name"} />
                            <Input
                                type={"text"}
                                name={"name"}
                                id={"name"}
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Password"} htmlFor={"password"} />
                            <Input
                                type={"password"}
                                name={"password"}
                                id={"password"}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <div className={"mt-2 text-sm text-red-700"}>
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label
                                value={"Nomor Telepon"}
                                htmlFor={"phone_number"}
                            />
                            <Input
                                type={"number"}
                                name={"phone_number"}
                                id={"phone_number"}
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                            />
                            {errors.phone_number && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.phone_number}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label
                                value={"Tanggal Lahir"}
                                htmlFor={"date_of_birth"}
                            />
                            <Input
                                type={"date"}
                                name={"date_of_birth"}
                                id={"date_of_birth"}
                                value={data.date_of_birth}
                                onChange={(e) =>
                                    setData("date_of_birth", e.target.value)
                                }
                            />
                            {errors.date_of_birth && (
                                <div className={"mt-2 text-sm text-red-700"}>
                                    {errors.date_of_birth}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Tinggi Badan"} htmlFor={"height"} />
                            <div
                                className={
                                    "mt-1 flex w-full items-center rounded-md border border-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                }
                            >
                                <input
                                    className={
                                        "rounded-md border-r-4 border-none bg-[#020617] p-3 text-white focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                    }
                                    type={"number"}
                                    name={"height"}
                                    id={"height"}
                                    value={data.height}
                                    onChange={(e) =>
                                        setData("height", e.target.value)
                                    }
                                />
                                <h6
                                    className={
                                        "ms-1 w-full border-l-2 text-center text-slate-100"
                                    }
                                >
                                    Cm
                                </h6>
                            </div>
                            {errors.height && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.height}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Batas tengah */}
                    <div className="flex flex-col gap-4 ">
                        <div className="w-full">
                            <Label value={"Nama Akhir"} htmlFor={"last_name"} />
                            <Input
                                type={"text"}
                                name={"last_name"}
                                id={"last_name"}
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                            {errors.last_name && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.last_name}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Email"} htmlFor={"email"} />
                            <Input
                                type={"email"}
                                name={"email"}
                                id={"email"}
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label
                                value={"Konfirmasi Password"}
                                htmlFor={"password_confirmation"}
                            />
                            <Input
                                type={"password"}
                                name={"password_confirmation"}
                                id={"password_confirmation"}
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />
                            {errors.password_confirmation && (
                                <div className={"mt-2 text-sm text-red-700"}>
                                    {errors.password_confirmation}
                                </div>
                            )}
                        </div>
                        <div className="w-full">
                            <Label value={"Alamat"} htmlFor={"address"} />
                            <Input
                                type={"text"}
                                name={"address"}
                                id={"address"}
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            {errors.address && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.address}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Jenis Kelamin"} htmlFor={"gender"} />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-3 text-white"
                                name={"gender"}
                                id={"gender"}
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value={"L"}>Laki-Laki</option>
                                <option value={"P"}>Perempuan</option>
                            </select>
                            {errors.gender && (
                                <div className={"mt-2 text-sm text-red-700"}>
                                    {errors.gender}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Berat Badan"} htmlFor={"weight"} />
                            <div
                                className={
                                    "mt-1 flex w-full items-center rounded-md border border-white shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                }
                            >
                                <input
                                    className={
                                        "rounded-md border-r-4 border-none bg-[#020617] p-3 text-white focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                    }
                                    type={"number"}
                                    name={"weight"}
                                    id={"weight"}
                                    value={data.weight}
                                    onChange={(e) =>
                                        setData("weight", e.target.value)
                                    }
                                />
                                <h6
                                    className={
                                        "ms-1 w-full border-l-2 text-center text-slate-100"
                                    }
                                >
                                    Kg
                                </h6>
                            </div>
                            {errors.weight && (
                                <div className={"mt-2 text-sm text-red-700 "}>
                                    {errors.weight}
                                </div>
                            )}
                        </div>
                        <div className={"w-full"}>
                            <Label value={"Role"} htmlFor={"role"} />
                            <select
                                className="mt-1 w-full rounded-md border-slate-300 bg-[#020617] p-2 p-3 text-white"
                                name={"role"}
                                id={"role"}
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                            >
                                <option value="">Pilih Role</option>
                                <option value={"admin"}>Admin</option>
                                <option value={"user"}>User</option>
                                <option value={"member"}>Member</option>
                            </select>
                            {errors.role && (
                                <div className={"mt-2 text-sm text-red-700"}>
                                    {errors.role}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="rounded-lg border border-lime-500 bg-lime-500 px-10 py-2 text-lg font-semibold text-slate-100 transition-all duration-300 hover:bg-lime-600 md:text-base lg:text-base"
                        disabled={processing}
                    >
                        {processing ? "Processing..." : "Create User"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default UserForm;
