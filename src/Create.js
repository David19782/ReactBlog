import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = function(e) {
        e.preventDefault();

        const blog = { title, body, author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then((res) => {
            return res.json();
        })
        .then(data => { 
            console.log("blog added", data);
            setIsPending(false)
            history.push("/")
        })
    }

    return ( 
        <div className="create">
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text"
                    required
                    name = "title"
                    value = {title}
                    onChange = { (e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    type = "text"
                    required
                    name = "body"
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Authot: </label>
                <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>

    );
}
 
export default Create;