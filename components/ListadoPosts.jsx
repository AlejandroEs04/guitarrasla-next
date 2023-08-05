import styles from '../styles/grid.module.css'
import Post from "./Post";

const fetchBlog = () => {
    return fetch('http://127.0.0.1:1337/api/posts?populate=imagen').then(res => res.json())
}

export default async function ListadoPosts() {
    const {data: posts} = await fetchBlog();
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <Post 
            key={post.id}
            post={post.attributes}
        />
      ))}
    </div>
  )
}

