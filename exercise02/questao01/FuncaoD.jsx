import CorContexto from "./MeuContexto"

// MODO LEGADO
const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                // quebrando o objeto e pegando so o de interesse
                // ({cor2, nome}) =>
                (cores) =>
                    <div>
                        <h1 style={{ backgroundColor: cores.bkgD }}>Funcao D</h1>
                    </div>
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD