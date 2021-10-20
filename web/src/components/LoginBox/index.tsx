import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';


export function LoginBox() {
    // Retrieve AuthContext
    const { signInUrl, user } = useContext(AuthContext);

    console.log(user)
    
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com Github
            </a>
        </div>
    )
}