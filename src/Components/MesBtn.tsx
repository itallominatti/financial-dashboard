import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    background: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-1)",
    fontWeight: "600",
    textTransform: "capitalize",

};

function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
}

function nomeMes(n: number): string {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
    }).format(date);
}

const MesBtn = ({ n }: { n: number }) => {

    const { setFinal, setInicio } = useData();

    function setMes(n: number) {

        const date = new Date();
        date.setMonth(date.getMonth() + n);

        const firstday = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        setInicio(formatDate(firstday));
        setFinal(formatDate(lastday));
    }

    return (
        <button onClick={() => setMes(n)} style={style}>{nomeMes(n)}</button>
    );
}

export default MesBtn;