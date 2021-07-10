import React from 'react';

const Article = ({article}) => {

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

    return (
        <div className="article">
            <div className="card-header">
                <h3> {article.author} </h3>
                <em>Postée le: {dateParser(article.date)}</em>
            </div>
            <p> {article.content} </p>
            <div className="btn-container">
                <button>Editer</button>
                <button>Effacer</button>
            </div>
        </div>
    );
};

export default Article;