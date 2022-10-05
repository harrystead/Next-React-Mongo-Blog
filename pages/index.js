import Head from 'next/head'
import { getFeaturedPosts } from "../utilities/posts"
import Blog from "./blog"

export default function Home(props) {
  const title = "Battles of The First World War";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Blog posts={props.posts} title={title}></Blog>
      </main>
    </div>
  )
}

export const getStaticProps = () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts
    },
    revalidate: 1000
  }
}


