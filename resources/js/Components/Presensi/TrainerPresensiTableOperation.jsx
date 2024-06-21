import ButtonNew from "../ButtonNew";
// import Filter from "../Filter";
import SortBy from "../SortBy";
import { useState } from "react";
import { router } from "@inertiajs/react";

function TrainerPresensiTableOperation() {
    return (
        <div className="flex items-center gap-7">
            <ButtonNew href={"/presensi/create"} type="add-data">Add Presensi</ButtonNew>
        </div>
    );
}

export default TrainerPresensiTableOperation;
