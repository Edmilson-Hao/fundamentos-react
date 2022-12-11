import React from 'react'

import FamiliaMembro from './FamiliaMembro'

//Passando props para componente filho, pode ser usar destructuring {...props}
export default props => {
    return (
        <div>
            <FamiliaMembro nome='Pedro' sobrenome={ props.sobrenome }/>
            <FamiliaMembro nome='Ana' {...props}/>
            <FamiliaMembro nome='Gustavo' sobrenome='Silva'/>
        </div>
    )
}