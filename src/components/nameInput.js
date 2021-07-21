import { useContext } from "react";
import { NameContext } from "../contexts/nameContext";

export default function NameInput() {
    const [name, setName] = useContext(NameContext);

    return (
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
    );
}
