import { useState} from 'react';
import API from "../services/api";
import storageService from "../services/storageService";

function CreateArticle({onArticleCreated }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = storageService.getToken();
            await API.post("/articles",{title, author, content}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Article created");
            setTitle('');
            setAuthor('');
            setContent('');
            onArticleCreated();
        } catch (error) {
            console.error(error);
            alert("Failed to create article");
        }
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Create Article</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)
            } />
            <br />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e)=> setContent(e.target.value)}
            />
            <br />
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateArticle;