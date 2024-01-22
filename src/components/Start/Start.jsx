import styles from "./Start.module.css";

const GameStart = ({ startGame }) => {
    return (
        <div className={styles.start}>
            <h1>Secret Word</h1>
            <p>Click in the button above to play</p>
            <button onClick={startGame}>Start</button>
        </div>
    );
};

export default GameStart;