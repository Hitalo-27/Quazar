import React from 'react'

import './MenuValues.css'

function MenuValues(props) {
    return (
        <>
            <div className="CardValuesContainer">
                <div className="CardValueImg">
                    <img src={props.src} alt="Imagem" />
                </div>
                <div className="CardValueTitle">
                    <center>{props.title}</center>
                </div>
                <div className="CardValueText">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div><br/>
        </>
    )
}

export default MenuValues
