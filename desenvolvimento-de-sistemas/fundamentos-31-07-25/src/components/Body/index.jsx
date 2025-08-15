import styles from './body.module.css'
import Card from "./Card"
import { CardApi } from './Card/CardApi'


function Body(){
    const usuarios = [
        {nome: "Ana", idade: 22, cidade: "São Paulo"},
        {nome: "Bruno", idade: 30, cidade: "Florianópolis"},
        {nome: "Carla", idade: 25, cidade: "Rio de Janeiro"}
    ]

    return(
        <main className = {styles.body}>
            <h2>Usuários Cadastrados:</h2>
            <div className={styles.cardContainer}>
                {usuarios.map((usuario) => (
                    <Card
                    nome = {usuario.nome}
                    idade = {usuario.idade}
                    cidade = {usuario.cidade}/>
                ))}
                {/* <Card /> */}
            </div>

            <h2>Usuários vindos da API:</h2>
            <div className={styles.cardContainer}>
                <CardApi/>
            </div>
        </main>
    )
}

export default Body