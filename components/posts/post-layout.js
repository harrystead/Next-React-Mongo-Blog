import Post from "./post"

export default function PostLayout({posts}) {
    return (
        <div>
            {posts.map(post => <Post key={post.slug} post={post}></Post>)}
        </div>
    )
  }