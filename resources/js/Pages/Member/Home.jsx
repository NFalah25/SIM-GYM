import Row from "@/Components/Row";
import LayoutMember from "../../Components/Member/LayoutMember";
import ProgramCard from "@/Components/Member/ProgramCard";
import ButtonNew from "@/Components/ButtonNew";
import { usePage } from "@inertiajs/react";
function Home({ data }) {

    const {props} = usePage();
    const role =props.role;

    if (data.length === 0) {
        return (
            <>
            {role === "member" &&(
                <LayoutMember>
                <div className="bg-red-4 flex min-h-[80vh] flex-col items-center justify-center gap-4">
                    <h4 className="w-96 text-center text-lg font-medium italic">
                    You don't have an active program, please subscribe
                    first
                    </h4>
                    <ButtonNew href="/program_catalog">Buy programs</ButtonNew>
                </div>
            </LayoutMember>
            )}
            {role === "trainer" && (
            <LayoutMember>
                <div className="bg-red-4 flex min-h-[80vh] flex-col items-center justify-center gap-4">
                    <h4 className="w-96 text-center text-lg font-medium italic">
                        You are not registered as a trainer in any class
                    </h4>
                    
                </div>
            </LayoutMember>
            )}
            </>
        );
    }
    return (
        <>
            {role === "member" && (
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
            )}
            {role === "trainer" && (
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
                                hari={item.hari}
                                waktu={item.waktu}
                                ruangan={item.ruangan}
                                hariIni={item.hari_ini}
                            />
                        ))}
                    </div>
                </LayoutMember>
            )}
        </>
    );
}

export default Home;