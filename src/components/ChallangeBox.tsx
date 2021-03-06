import { useContext } from "react";
import { ChallangeContext } from "../contexts/ChallangeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallangeBox.module.css";
import { CompletedChallanges } from "./CompletedChallanges";

export function ChallangeBox() {
  const { activeChallange, resetChallange, completeChallange } = useContext(
    ChallangeContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallangeSucceeded() {
    completeChallange();
    resetCountdown();
  }

  function handleChallangeFailed() {
    resetChallange();
    resetCountdown();
  }

  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallange.amount} xp</header>

          <main>
            <img src={`icons/${activeChallange.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challangeFailedButton}
              onClick={handleChallangeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challangeSucceededButton}
              onClick={handleChallangeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
