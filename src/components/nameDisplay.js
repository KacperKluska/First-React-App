import { useContext } from "react"
import { NameContext } from "../contexts/nameContext"

export default function NameDisplay(props){
    const [name] = useContext(NameContext)
    return (
        <h1>Your name: {name}</h1>
    )
}