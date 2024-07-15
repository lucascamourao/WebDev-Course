import { useContext } from "react"
import PokemonContexto from "./MeuContexto"
import ComponenteFilho from "./ComponenteFilho"

const ComponentePai = () => {
    const index = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Pai</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                style={{ width: "400px" }}
                alt="pai"
            />
            <ComponenteFilho />
        </div>
    )
}

export default ComponentePai