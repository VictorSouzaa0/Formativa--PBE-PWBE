import styles from '../modules/Login.module.css';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useNavigate} from 'react-router-dom';
import logo from '../assets/images/senai-logo.png'


const loginSchema = z.object({
  email: z.string().email({message:'Invalid email address'}),
  password: z.string().min(6,{message:'Password must be at least 6 characters long'}),
})

export function Login() {
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: {errors},
    } = useForm({
      resolver: zodResolver(loginSchema),
    }); 

    function userAutenticate(data){
      navigate('/home');
    }
    return (
      
      <div className={styles.container}>
        <title>Login</title>
      <form className={styles.formLogin}> 
      <img className={styles.logo}src={logo}/>
      <h1>Login </h1>
      <br />
      <p>Bem vindo(a) ao Gerenciador de Ambientes</p> 
      <br />
        <div>
          <label htmlFor="email">Email:</label>
          {/* <p>{errors.email.message}</p> */}
          <br />
          <input className={styles.input} type="text" {...register('email')}/>
          <br />
          <label htmlFor="password">Senha:</label>
          <br />
          <input className={styles.input}  type="password"{...register('password')} />
        </div>
        <br />
        <button className={styles.access} onClick={userAutenticate}>Acessar</button>
        <br />
        <p><strong>Esqueceu a senha?</strong></p>
        <br />
      </form>
  </div>
    );

  }
