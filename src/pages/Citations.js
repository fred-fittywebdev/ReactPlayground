import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Article from '../components/Article';

const Citations = () => {

    const [citationData, setCitationData] = useState([])
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('http://localhost:3003/Citations').then((res) => setCitationData(res.data));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(content.length < 150) {
            setError(true)
        } else {
            axios.post("http://localhost:3003/Citations", {
                author: author,
                content: content,
                date: Date.now()
            })
            .then(() => {
                setError(false)
                setAuthor("")
                setContent("")
                getData()
            })
        }
    }
    

    return (
        <div className="news-container">
            <Header />
            <h1>Citations</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Auteur" value={author} />
            <textarea style={{border: error ? "1px solid #e64c3c" : "1px solid #282c34;"}} onChange={(e) => setContent(e.target.value)} placeholder="Citation" value={content}></textarea>
            {error && <p>Il faut un minimum de 150 caractères !</p>}
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