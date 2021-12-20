import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <h1>Welcome my blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// ssr 방식. 이 페이지에 들어올 때 마다 서버에서 만든 html 파일을 보여줌
// export const getServerSideProps = async () => {
//   // const res = await fetch(
//   //   'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10'
//   // );
//   const res = await fetch('http://localhost:8080/api/posts');
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

// ssg 방식.
export const getStaticProps = async () => {
  // const res = await fetch(
  //   'https://jsonplaceholder.typicode.com/posts?_start=0&_end=10'
  // );
  const res = await fetch('http://localhost:8080/api/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    // revalidate: 20
  };
};
