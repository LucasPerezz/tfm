import "./Post.css"

export default function Post(data) {
  console.log(data);

  return (
    <article key={data.data.id} className='postCard'>
      <h2>{data.data.title}</h2>
        <p>{data.data.body}</p>
    </article>
  )
}
