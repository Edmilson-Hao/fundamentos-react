import React, {cloneElement} from 'react'

//Passando props para componente filho, pode ser usar destructuring {...props}
export default props => {
    return (
        <div>
            {
                //clonElement -> metodo do React (React.cloneElement)
                    //Recebe 02 argumentos (elemento, props)
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}