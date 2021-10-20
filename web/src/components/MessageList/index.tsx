import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
       <div className={styles.messageListWrapper}>
           <img src={logoImg} alt="Do/While 2021" />

           <ul className={styles.messageList}>
               
               <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/duckbox72.png" alt="Luis Felipe Klaus" />
                        </div>
                        <span>Luis Felipe Klaus</span>
                    </div>
               </li>
               
               <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/duckbox72.png" alt="Luis Felipe Klaus" />
                        </div>
                        <span>Luis Felipe Klaus</span>
                    </div>
               </li>
               
               <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/duckbox72.png" alt="Luis Felipe Klaus" />
                        </div>
                        <span>Luis Felipe Klaus</span>
                    </div>
               </li>
               
           </ul>
       </div>
    )
}