import React, {cloneElement} from 'react'

import FamiliaMembro from './FamiliaMembro'

//Passando props para componente filho, pode ser usar destructuring {...props}
export default props => {
    console.log(typeof props.children)
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}