import Row from "@/Components/Row";
import LayoutMember from "../../Components/Member/LayoutMember";
import ProgramCard from "@/Components/Member/ProgramCard";
import ButtonNew from "@/Components/ButtonNew";
function Home({ data }) {
    if (data.length === 0) {
        return (
            <LayoutMember>
                <div className="bg-red-4 flex min-h-[80vh] flex-col items-center justify-center gap-4">
                    <h4 className="text-lg italic font-medium text-center w-96">
                        Anda tidak memiliki program aktif, silahkan berlangganan
                        terlebih dahulu
                    </h4>
                    <ButtonNew href="/program_catalog">
                        Beli program
                    </ButtonNew>
                </div>
            </LayoutMember>
        );
    }
    return (
        <LayoutMember>
            <Row>
                <h2 className="text-3xl font-extrabold text-slate-100 md:text-4xl lg:text-5xl">
                    Today Class Availabel
                </h2>
            </Row>
            <div className="box-border flex flex-wrap gap-5 mt-10">
                {data.map((item) => (
                    <ProgramCard
                        key={item.id}
                        program={item.program}
                        presensi={item.presensi}
                    />
                ))}
            </div>
        </LayoutMember>
    );
}

export default Home;
