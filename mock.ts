// Named export
export interface User {
    id: string,
    name: string,
    email: string,
    role: "admin" | "user"
}

export interface Post {
    id: string,
    title: string,
    content: string,
    authorId: string,
    tags: string[]
}

export const USERS: User[] = [
    { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: '2', name: 'Bob', email: 'bob@example.com', role: 'user' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com', role: 'user' },
];

// Named export
export const POSTS: Post[] = [
    { id: 'p1', title: 'Intro to GraphQL', content: 'GraphQL is...', authorId: '1', tags: ['graphql', 'api'] },
    { id: 'p2', title: 'MongoDB Basics', content: 'Mongo is...', authorId: '2', tags: ['mongo', 'db'] },
    { id: 'p3', title: 'Why Performance Matters', content: 'Slow APIs...', authorId: '1', tags: ['perf'] },
    { id: 'p4', title: 'TypeScript Tips', content: 'TS is great...', authorId: '3', tags: ['ts'] },
    { id: 'p5', title: 'Redis Caching', content: 'Cache aside...', authorId: '2', tags: ['redis', 'cache'] },
];