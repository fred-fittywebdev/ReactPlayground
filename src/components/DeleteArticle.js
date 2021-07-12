import React from 'react';
import axios from 'axios';

const DeleteArticle = ( {id} ) => {

    const handleDelete = () => {
        axios.delete('http://localhost:3003/Citations/' + id)
        window.location.reload()
    }

    return (
        <button onClick={() => {
            if(window.confirm("Vous allez supprimer cet article, continuer ?")) {
                handleDelete()
            }
        }}>Supprimer</button>
    );
};

export default DeleteArticle;