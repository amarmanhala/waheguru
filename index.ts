import express, { type Request, type Response } from "express";
import { POSTS, USERS } from "./mock.js";
import cors from "cors";
import { connectDB } from "./db.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
    const users = USERS;
    return res.status(200).json(users);
})

app.get("/api/posts", (req: Request, res: Response) => {
    const posts = POSTS.map(post => {
        const authWithPosts = USERS.find(user => user.id === post.authorId)
        console.log("you are here", authWithPosts);
        return { post, authWithPosts };
    });
    return res.status(200).json(posts);
})

app.get("/api/users/:id", (req: Request, res: Response) => {
    const user = USERS.find(user => user.id === req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send({ message: "User not found" });
    }

})

app.get("/api/posts/:id", (req: Request, res: Response) => {
    const post = POSTS.find(post => post.id === req.params.id);
    const author = USERS.find(user => user.id === post?.authorId);
    if (post) {
        res.status(200).send({ ...post, author });
    } else {
        res.status(404).send({ message: "Post not found" });
    }
})

app.get("/api/health", (req: Request, res: Response) => {
    res.status(200).send({ status: "OK" });
})



const startServer = async () => {
    await connectDB();
    app.listen(8080, () => console.log("port is running on 8080"));

}

startServer();
