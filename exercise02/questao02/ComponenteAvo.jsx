import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {
    const index = 1

    return (
        <PokemonContexto.Provider value={index}>
            <div>
                <h1>Componente Avô</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} 
                    style={{width:"400px"}}
                    alt="avo"
                />
                <ComponentePai />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo