import styles from './components-css/Header.module.css'
import logo from '../assets/logo.svg'
import {  PlusCircle  } from 'phosphor-react'


export function Header(){

    function CreateTask(){
        console.log('Estou funcionando!')
    }

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <img className={styles.imageLogo} src={logo}></img>
                </div>
            </div>

            <form className={styles.createTask}>
                <input className={styles.inputTask} type="text" required placeholder='Adicione uma nova tarefa'/>

                <div className={styles.aroundButton}>
                    <button onClick={CreateTask} className={styles.button}>
                        <div className={styles.buttonContent}>Criar</div>
                        <PlusCircle className={styles.buttonIcon} size={25}/>
                    </button>
                </div>
            </form>
        </header>
    )
}