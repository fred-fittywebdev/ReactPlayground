import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Article from '../components/Article';

const Citations = () => {

    const [citationData, setCitationData] = useState([])

    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('http://localhost:3003/Citations').then((res) => setCitationData(res.data));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('soumis');
    }
    

    return (
        <div className="news-container">
            <Header />
            <h1>Citations</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Auteur" />
            <textarea placeholder="Citation"></textarea>
            <input type="submit" value="Poster" />
            </form>
            <ul> {citationData
                .sort((a, b) => b.date - a.date)
                .map((article) => (
                <Article key={article.id} article={article} />
            ))} </ul>
        </div>
    );
};

export default Citations;