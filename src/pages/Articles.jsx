import {useEffect, useState} from 'react';
import API from "../services/API";
import CreateArticle from "../components/CreateArticle";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await API.get('/articles');
            setArticles(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const deleteArticle = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await API.delete(
                `/articles/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            fetchArticles();
        }catch (error){
            console.error(error);
            alert("Failed to delete article");
        }
    };

    const searchArticles = async () => {
        try{
            const response = await API.get(`/articles/search?title=${searchTerm}`);
            setArticles(response.data);
        }catch (error){
            console.error(error);
        }
    };

    return (
        <div>
            <CreateArticle
                onArticleCreated ={fetchArticles}
            />
            <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) =>
                setSearchTerm(e.target.value)
            }
            />
            <button onClick={searchArticles}>
                Search
                </button>

                <button onClick={fetchArticles}>
                Show All
                </button>

            <h2>Articles</h2>
            {articles.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <p>{article.content}</p>
                    <button
                    onClick={()=>
                        deleteArticle(article.id)
                    }>
                        Delete
                        </button>
                        <hr />
                </div>
            ))}
                    
        </div>
    );
}
    


export default Articles;