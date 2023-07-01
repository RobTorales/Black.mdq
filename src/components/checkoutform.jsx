import React from 'react'
import { useState } from 'react'

export const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData ={
            nombre, phone, email
        }

        onConfirm(userData)
    }

  return (
    <main>
        <div class="d-flex justify-content-center m-0 p-0 w-100">
            <div class="bg-grey border border-shadow m-2 card-size rounded p-2 my-4">
                <form className="formulario" onSubmit={handleConfirm}>
                    <div>
                        <h2 class="fs-3 fw-bold text-center">Orden de compra</h2>
                    </div>
                    <div class="mb-3 m-2">
                        <label  class="form-label m-0">Nombre:</label>
                        <input type="text" value={nombre} onChange={({target}) => setNombre(target.value)} class="form-control border border-dark"  />
                    </div>
                    <div class="mb-3 m-2">
                        <label for="exampleInputEmail1" class="form-label m-0">Correo:</label>
                        <input type="email" value={email} onChange={({target}) => setEmail(target.value)}class="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3 m-2">
                        <label for="exampleInputEmail1" class="form-label m-0">Celular:</label>
                        <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}class="form-control border border-dark" />
                    </div>
                    
                    
                    <div class="mb-3 m-2">
                        <div class="row d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary btn-black border border-white text-white bg-black w-auto me-1">Crear Orden</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
    
  )
}
 export default CheckoutForm;