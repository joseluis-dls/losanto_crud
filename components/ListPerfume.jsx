"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ListPerfume() {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        getPerfumes();
    }, []);

    function getPerfumes() {
        axios.get('http://localhost:3001/api/perfumes')
            .then(function(response) {
                //console.log(response.data);
                setPerfumes(response.data);
            });
    }

    const deletePerfume = (id_perfume, nombre) => {
        console.log("Nombre del perfume:", nombre)
        const confirmDelete = window.confirm(`¿Seguro que desea eliminar este producto? ${nombre}`);
        if (!confirmDelete) return; // Si el usuario cancela, se detiene la función

        axios.delete(`http://localhost:3001/api/delete/${id_perfume}`)
            .then(function(response){
                console.log(response.data);
                getPerfumes();
            })
            .catch(function(error) {
                console.error("Error deleting product:", error);
            });
    }

    return (
        <table className="table table-zebra">
            <thead className="text-smm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">ID</th>
                    <th className="py-3 px-6">Nombre</th>
                    <th className="py-3 px-6">Genero</th>
                    <th className="py-3 px-6">Categoria</th>
                    <th className="py-3 px-6">Tipo</th>
                    <th className="py-3 px-6">mL</th>
                    <th className="py-3 px-6">Marca</th>
                    <th className="py-3 px-6">Precio</th>
                    <th className="py-3 px-6">Imagen</th>
                    <th className="py-3 px-6 text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {perfumes.map((perfume, key) => {
                console.log(perfume);  // Verifica que perfume tenga el campo nombre
                return (
                    <tr key={key} className="bg-white border-b">
                        <td className="py-3 px-6">{perfume.id_perfume}</td>
                        <td className="py-3 px-6">{perfume.nombre}</td>                      
                        <td className="py-3 px-6">{perfume.genero}</td>
                        <td className="py-3 px-6">{perfume.categoria}</td>
                        <td className="py-3 px-6">{perfume.tipo}</td>
                        <td className="py-3 px-6">{perfume.mL}</td>
                        <td className="py-3 px-6">{perfume.disenador}</td>
                        <td className="py-3 px-6">{perfume.precio}</td>
                        <td className="py-3 px-6">
                            <img
                                src={`https://drive.google.com/uc?export=view&id=${perfume.url_imagen}`}
                                alt={perfume.nombre}
                                className="w-20 h-20 object-cover"
                            />
                        </td>
                        <td className="flex justify-center gap-1 py-3">
                            <button 
                                onClick={() => deletePerfume(perfume.id_perfume, perfume.nombre)} 
                                className="btn btn-error"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
})}

            </tbody>
        </table>
    )
}