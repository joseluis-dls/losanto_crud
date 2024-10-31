"use client"

import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

const AddNewPerfume = () => {
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);  // Verificar los datos que envía el formulario

        // console.log(inputs.name);
        axios.post('http://localhost:3001/api/addPerfume', inputs)
            .then(function (response) {
                console.log(response.data);
                router.push('/')
            })
            .catch(function (error) {
                console.error('Error adding perfume:', error);
            });
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Agregar Perfume</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-900">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="input input-bordered input-primary w-full max-w-xs"
                        placeholder="Nombre..."
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="genero" className="block text-sm font-medium text-gray-900">
                        Genero
                    </label>
                    <select
                        name="genero"
                        id="genero"
                        className="select select-bordered select-primary w-full max-w-xs"
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un genero...</option>
                        <option value="Caballero">Caballero</option>
                        <option value="Dama">Dama</option>
                        <option value="Dama">Unisex</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="tipo" className="block text-sm font-medium text-gray-900">
                        Tipo
                    </label>
                    <select
                        name="tipo"
                        id="tipo"
                        className="select select-bordered select-primary w-full max-w-xs"
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un tipo...</option>
                        <option value="EDT">EDT</option>
                        <option value="EDP">EDP</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="mL" className="block text-sm font-medium text-gray-900">
                        mL
                    </label>
                    <input
                        type="number"
                        name="mL"
                        id="mL"
                        className="input input-bordered input-primary w-full max-w-xs"
                        placeholder="mL..."
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="disenador" className="block text-sm font-medium text-gray-900">
                        Marca
                    </label>
                    <input
                        type="text"
                        name="disenador"
                        id="disenador"
                        className="input input-bordered input-primary w-full max-w-xs"
                        placeholder="Marca..."
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-900">
                        Precio
                    </label>
                    <input
                        type="number"
                        name="precio"
                        id="precio"
                        className="input input-bordered input-primary w-full max-w-xs"
                        placeholder="Precio..."
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="url_imagen" className="block text-sm font-medium text-gray-900">
                        URL Imagen
                    </label>
                    <input
                        type="text"
                        name="url_imagen"
                        id="url_imagen"
                        className="input input-bordered input-primary w-full max-w-xs"
                        placeholder="URL de imagen..."
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add New Perfume</button>
            </form>

            </div>
        </div>
    );
};

export default AddNewPerfume