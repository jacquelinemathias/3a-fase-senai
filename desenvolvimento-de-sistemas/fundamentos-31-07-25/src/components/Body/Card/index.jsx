import React from "react"

const Card = ({nomne, idade, cidade}) => {
    return(
        <div className={styles.card}>
            <h3>{nome}</h3>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
        </div>
    )
}

export default Card