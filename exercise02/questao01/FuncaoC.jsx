import { useContext } from "react"
import CorContexto from "./MeuContexto"
import FuncaoD from "./FuncaoD"

const FuncaoC = () => {
    const {bkgC} = useContext(CorContexto)
    // const {cor, cor2, nome} = useContext(CorContexto)
    // const {cor, cor2, nome} = cor

    return (
        <div>
            <h1 style={{ backgroundColor: bkgC }}>Funcao C</h1>
            <FuncaoD />
        </div>
    )
}

export default FuncaoC