import React from "react";
import { useData } from "../Context/DataContext";

const Header = () => {
    const { data } = useData();

    return (
        <h1>header</h1>
    )
}

export default Header;