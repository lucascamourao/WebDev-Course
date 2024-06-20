// Exercice 00

import { Component } from "react"

// Using functions 
/*
function MeusDados() {
    return (
        <div>
            <h1>Lucas Cabral</h1>
            <h1>Computer Science</h1>
            <h1>Federal University of Ceará</h1>
        </div>
    )
} */

// Using arrow function with return
/*
const MeusDados = () => {
    return (
        <div>
            <h1>Lucas Cabral</h1>
            <h1>Computer Science</h1>
            <h1>Federal University of Ceará</h1>
        </div>
    )
} */

// Using arrow function without return
/*
const MeusDados = () => 
    <div>
        <h1>Lucas Cabral</h1>
        <h1>Computer Science</h1>
        <h1>Federal University of Ceará</h1>
    </div>
*/

// Using class
class MeusDados extends Component {
    render() {
        return (
            <div>
                <h1>Lucas Cabral</h1>
                <h1>Computer Science</h1>
                <h1>Federal University of Ceará</h1>
            </div>
        )
    }
}

export default MeusDados
