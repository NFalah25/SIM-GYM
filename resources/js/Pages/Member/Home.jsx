import Row from "@/Components/Row";
import LayoutMember from "../../Components/Member/LayoutMember";
import ProgramCard from "@/Components/Member/ProgramCard";
function Home() {
    const data = [
        {
            id: 1,
            program: "Angkat Beban",
            presensi: true,
        },
        {
            id: 2,
            program: "Yoga",
            resensi: false,
        },
        {
            id: 3,
            program: "Boxing",
            resensi: true,
        },
        {
            id: 4,
            program: "Zumba",
            resensi: true,
        },
        {
            id: 5,
            program: "Boxing",
            resensi: false,
        },
    ];

    return (
        <LayoutMember>
            <Row>
                <h2 className="text-3xl font-extrabold text-slate-100 md:text-4xl lg:text-5xl">
                    Today Class Availabel
                </h2>
            </Row>
            <div className="mt-10 box-border flex flex-wrap gap-5">
                {data.map((item) => (
                    <ProgramCard
                        program={item.program}
                        presensi={item.presensi}
                    />
                ))}
            </div>
        </LayoutMember>
    );
}

export default Home;
