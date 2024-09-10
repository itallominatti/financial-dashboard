import React from "react";
import MesBtn from "./MesBtn";


const Meses = () => {
    return (
        <div className="flex">
            <MesBtn n={-1} />
            <MesBtn n={-2}/>
            <MesBtn n={-3}/>
        </div>
    )
}

export default Meses;