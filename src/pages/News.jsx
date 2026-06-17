import { useEffect, useState } from 'react';
import API from '../services/api';
 
function News() {
 
    const [news, setNews] = useState([]);
 
    useEffect(() => {
        fetchNews();
    }, []);
 
    const fetchNews = async () => {
 
        try {
 
            const response =
                await API.get('/news');
 
            setNews(response.data);
 
        } catch (error) {
 
            console.error(error);
 
        }
 
    };
 
    return (
        <div>
 
            <h2>External News</h2>
 
            {news.map(item => (
 
                <div key={item.id}>
 
                    <h3>{item.title}</h3>
 
                    <p>{item.body}</p>
 
                    <hr />
 
                </div>
 
            ))}
 
        </div>
    );
}
 
export default News;
 