import styles from "./GameOver.module.css";

const GameOver = ({ retry, score }) => {
    return (
        <div className={styles.gameover}>
            <h1>End of the game!</h1>
            <h2>
                Your score: <span>{score}</span>!
            </h2>
            <button onClick={retry}>Restart</button>
        </div>
    );
};

export default GameOver;