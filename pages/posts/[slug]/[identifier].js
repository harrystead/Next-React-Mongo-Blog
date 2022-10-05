import Head from "next/head"
import PostArticle from "../../../components/posts/details/post-article";
import Comments from "../../../components/posts/details/comments/comments";
import { getAllPosts } from "../../../utilities/posts";

const Post = (props) => {
  const filteredPost = props.post;

  if (!filteredPost) {
    return (
      <>
        <Head>
          <title>Battles of The First World War</title>
          <meta
            name="description"
            content="Battles of The First World War."
          />
        </Head>
        <h1 style={{ textAlign: "center" }}>No posts found with that filter</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{"Battles of The First World War: " + filteredPost.title}</title>
        <meta
          name="description"
          content={filteredPost.excerpt}
        />
      </Head>
      <PostArticle post={filteredPost} />
      <Comments />
    </>
  );
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === slug);

  return {
    props: {
      post
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return { params: { slug: post.slug, identifier: post.identifier } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Post;
