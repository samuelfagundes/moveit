import { useContext } from "react";
import { ChallangeContext } from "../contexts/ChallangeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallangeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/samuelfagundes.png" alt="O tal do Samuel" />
      <div>
        <strong>Samuel Fagundes</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
