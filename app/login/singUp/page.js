'use client'
import '@/app/cssLogin/singUp.css';
import Link from 'next/link';
import React, { useState } from 'react';

export default function InicioSesion() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='bg_signUp'>
            <div className='center_contenido'>
                <div className='container_login'>
                    <form action=''>
                        <h1 className='titulo'>Inicio de Sesión</h1>
                        <div className='input_box'>
                            <select className='rol'>
                                <option className='color_option' disabled>--Seleccione Su Rol--</option>
                                <option className='color_option'>Cliente</option>
                                <option className='color_option'>Vendedor</option>
                            </select>
                        </div>
                        <div className='input_box'>
                            <input className='input_wh' type='text' placeholder='Nombre Usuario' />
                            <i class='bx bxs-user icono_login'></i>
                        </div>
                        <div className='input_box'>
                            <input className='input_wh'
                                type={passwordVisible ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                            <button className='icono_login' type="button" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <i class="fa-regular fa-eye-slash"></i> : <i class="fa-regular fa-eye"></i>}
                            </button>
                        </div>

                        <div className='recordar_contra'>
                            <label className='box_pass'>
                                <input className='box_pass' type='checkbox' />Recuerdame
                            </label>
                            <Link className='link_pass' href='#'>Olvidaste tu Contraseña</Link>
                        </div>

                        <button type='submit' className='btn_signUp'>Iniciar Sesión</button>

                        <div className='registro_link'>
                            <p>
                                No tienes una Cuenta?
                                <Link className='texto_info_link' href='/login/registro'>Regístrate</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
