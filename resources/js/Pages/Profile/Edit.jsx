import Row from "@/Components/Row";
import EditProfileForm from "@/Components/Profile/EditProfileForm";
import Dashboard from "@/Pages/Dashboard";

function ProfileUpdate() {
    return (
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
    );
}

export default ProfileUpdate;
