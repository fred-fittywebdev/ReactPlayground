import React, { useState } from 'react';
import axios from 'axios';

const Article = ({article}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editedContent, setEditedContent] = useState('')

    const dateParser = (date) => {
        //let newDate = new Date(date).toLocaleDateString('fr-FR') -> Renvoie une date classique sous ce format, 07/07/2021
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
        return newDate
    }

    const handleEdit = () => {

        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
        }

        axios.put('http://localhost:3003/Citations/' + article.id, data)
        .then(() => {
            setIsEditing(false)
        })
    }

    return (
        <div className="article"
            style ={{background: isEditing ? "#cacaca" : "white"}}>
            <div className="card-header">
                <h3> {article.author} </h3>
                <em>Postée le: {dateParser(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea onChange={(e) => setEditedContent(e.target.value)} autoFocus defaultValue={editedContent ? editedContent : article.content}></textarea>
            ) : (
                <p> {editedContent ? editedContent : article.content} </p>
            ) }
            <div className="btn-container">
            {isEditing ? [
                <button onClick={handleEdit}>Valider</button>
            ] : (
                <button onClick={() => setIsEditing(true)}>Editer</button>
            )}
                <button>Effacer</button>
            </div>
        </div>
    );
};

export default Article;