import { useContext } from "react"
import { NameContext } from "../contexts/nameContext"

export default function NameDisplay({greeting}){
    const [name] = useContext(NameContext)
    return (
        <h1>{greeting} {name}</h1>
    )
}