const MeusDados = (props) => {
    const {name, course, university} = props
    return (
        <div>
            <h1>{name}</h1>
            <h1>{course}</h1>
            <h1>{university}</h1>
        </div>
    )
} 

export default MeusDados
