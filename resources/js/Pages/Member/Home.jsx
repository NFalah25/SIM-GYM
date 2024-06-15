import Row from "@/Components/Row";
import LayoutMember from "../../Components/Member/LayoutMember";
import ProgramCard from "@/Components/Member/ProgramCard";
import ButtonNew from "@/Components/ButtonNew";
function Home({ data }) {
    console.log(data);
    if (data.length === 0) {
        return (
            <LayoutMember>
                <div className="bg-red-4 flex min-h-[80vh] flex-col items-center justify-center gap-4">
                    <h4 className="w-96 text-center text-lg font-medium italic">
                        Anda tidak memiliki program aktif, silahkan berlangganan
                        terlebih dahulu
                    </h4>
                    <ButtonNew href="/member/program_catalog">
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
            <div className="mt-10 box-border flex flex-wrap gap-5">
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
