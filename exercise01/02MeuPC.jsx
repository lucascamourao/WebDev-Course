const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h1>{nome}: R$ {preco}</h1>
        </div>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h1>{nome}: R$ {preco}</h1>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h1>{nome}: R$ {preco}</h1>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}
