import { Children, cloneElement } from "react"

// arena foi clonado
const Hero = ({name, arena}) => {
    return (
        <div>
            <h1>Hero name: {name} na Arena {arena}</h1>
            <img 
                src="https://i.pinimg.com/736x/51/33/b7/5133b7ed0f7fc74a12b0d1317e266afb.jpg"
                alt="superman"
                style={{width: "736px" }}
            />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Enemy name: {name}</h1>
            <img 
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/Homelander-Fan-Art-Edoardo-Morelli.jpg"
                alt="homelander"
                style={{width: "736px" }}
            />
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1>Arena {name} </h1>
            <Hero name="Superman"/>
            <Enemy name="Homelander"/>
        </div>
    )
}

const Arena2 = ({name, children}) => {
    return (
        <div>
            <h1>Arena {name} </h1>
            {
            Children.map(
                children, 
                (child) => {
                    return cloneElement(child, {arena: name})
                }
            )
            }
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
        
}

export {Hero, Enemy, Arena, Arena2, World}
