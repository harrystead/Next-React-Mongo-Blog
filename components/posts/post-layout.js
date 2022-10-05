import Post from "./post"

export default function PostLayout({posts}) {
    return (
        <div>
            {posts.length > 0 ? posts.map(post => <Post key={post.slug} post={post}></Post>)
            : <div><h2>No Posts</h2></div>}
        </div>
    )
  }