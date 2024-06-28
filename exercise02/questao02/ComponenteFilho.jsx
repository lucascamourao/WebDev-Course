import { useContext } from "react"
import PokemonContexto from "./MeuContexto"

const ComponenteFilho = () => {
    const index = useContext(PokemonContexto)

    return (
        <PokemonContexto.Consumer>
            <div>
                <h1>Componente Filho</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+2}.png`}
                    style={{ width: "400px" }}
                    alt="filho"
                />
            </div>
        </PokemonContexto.Consumer>
    )
}

export default ComponenteFilho