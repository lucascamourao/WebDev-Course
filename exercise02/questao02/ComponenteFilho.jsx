import { useContext } from "react"
import PokemonContexto from "./MeuContexto"

const ComponenteFilho = () => {
    const index = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Filho</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 2}.png`}
                style={{ width: "400px" }}
                alt="filho"
            />
        </div>
    )
}

export default ComponenteFilho