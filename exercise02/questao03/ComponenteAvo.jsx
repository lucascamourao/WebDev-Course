import { useState } from "react"
import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {
    //let index = 1 // usar 'let' pq vai ser alterado

    const [index, setIndex] = useState(1)

    const buttonAction1 = () => {
        setIndex(index + 1)
    }

    const buttonAction2 = () => {
        setIndex(index - 1)
    }

    return (
        <PokemonContexto.Provider value={index}>
            <div>
                <h1>Componente Avô</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                    style={{ width: "400px" }}
                    alt="avo"
                />
                <button
                    onClick={buttonAction1}
                >
                    Aumentar Index
                </button>

                <button
                    onClick={buttonAction2}
                >
                    Diminuir Index
                </button>

                <ComponentePai />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo