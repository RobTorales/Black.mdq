import React from 'react'
import "./contacto.css";
import { useState } from 'react';

export const Contacto = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log("Enviado", {nombre, email, phone})
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
  return (
    <main>
        <div class="d-flex justify-content-center m-0 p-0 w-100">
                    <div class="bg-grey border border-shadow m-2 card-size rounded p-2 my-4">
                        <form className="formulario" onSubmit={handleSubmit}>
                            <div>
                                <h2 class="fs-3 fw-bold text-center">Contacto</h2>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Nombre:</label>
                                <input type="text" value={nombre} onChange={handleNombre}class="form-control border border-dark" id="exampleInputEmail1" />
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Correo:</label>
                                <input type="email" value={email} onChange={handleEmail}class="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Celular:</label>
                                <input type="text" value={phone} onChange={handlePhone}class="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3 m-2">
                                <label for="exampleInputEmail1" class="form-label m-0">Comentarios:</label>
                                <div class="form-floating">
                                    <textarea class="form-control border-dark" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Escribe tu opinion</label>
                                </div>
                            </div>
                            <div class="mb-3 m-2">
                                <div class="form-check d-flex justify-content-center m-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label ms-1" for="flexCheckDefault">
                                        He leído y acepto los términos y condiciones de uso
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3 m-2">
                                <div class="row d-flex justify-content-center">
                                    <button type="button" class="btn btn-primary btn-violet border border-white text-white bg-black w-auto me-1">Enviar</button>
                                    <button type="reset" class="btn btn-primary btn-violet border border-white text-white bg-black w-auto ms-1">Limpiar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    </main>
    
  )
}

export default Contacto;