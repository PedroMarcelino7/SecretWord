import styles from "./Game.module.css";
import { useState, useRef } from "react";

const Game = ({
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) => {
    const [letter, setLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        verifyLetter(letter);

        setLetter("");

        letterInputRef.current.focus();
    };

    return (
        <div className={styles.game}>
            <h1>Guess the Word</h1>
            <h3 className={styles.tip}>
                Tip: <span>{pickedCategory.toUpperCase()}</span>
            </h3>
            <p className={styles.guesses}>You still have {guesses} attempt(s).</p>
            <div className={styles.wordContainer}>
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span className={styles.letter} key={i}>
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className={styles.blankSquare}></span>
                    )
                )}
            </div>
            <div className={styles.letterContainer}>
                <p>Try to guess a letter:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        onChange={(e) => setLetter(e.target.value)}
                        required
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Play!</button>
                </form>
            </div>
            <div className={styles.wrongLettersContainer}>
                <p>Wrong used letters:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter.toUpperCase()}, </span>
                ))}
            </div>
            {/* <p className={styles.points}>
                <span>Pontuação:</span> {score}
            </p> */}
        </div>
    );
};

export default Game;