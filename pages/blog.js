import Title from "../components/title";
import PostLayout from "../components/posts/post-layout";
import Footer from "../components/footer";

export default function Blog(props) {
  const tagLine = "Exploring the major battles of the Great War (1914-1918)"
  return (
    <div>
      <main>
        <Title title={props.title} tagLine={tagLine}></Title>
        <PostLayout posts={props.posts}></PostLayout>
      </main>
      <Footer></Footer>
    </div>
  )
}