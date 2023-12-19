import styles from "./Start.module.css";

const GameStart = ({ startGame }) => {
    return (
        <div className={styles.start}>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar</button>
        </div>
    );
};

export default GameStart;