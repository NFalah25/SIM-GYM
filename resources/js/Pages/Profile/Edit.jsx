import Row from "@/Components/Row";
import EditProfileForm from "@/Components/Profile/EditProfileForm";
import Dashboard from "@/Pages/Dashboard";
import { usePage } from "@inertiajs/react";
import LayoutMember from "@/Components/Member/LayoutMember";

function ProfileUpdate() {
    const { props } = usePage();
    const role = props.role;

    return (
        <>
            {role === "admin" &&
                <Dashboard>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            Update Profile
                        </h2>
                    </Row>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <EditProfileForm />
                    </Row>
                </Dashboard>
            }
            {role === "member" && (
                <LayoutMember>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <h2 className="font-poppins text-2xl font-bold text-slate-100">
                            Update Profile
                        </h2>
                    </Row>
                    <Row
                        orientation="horizontal"
                        className="flex-col gap-4 md:flex-row lg:flex-row"
                    >
                        <EditProfileForm />
                    </Row>
                </LayoutMember>
            )}
        </>
    );
}

export default ProfileUpdate;
