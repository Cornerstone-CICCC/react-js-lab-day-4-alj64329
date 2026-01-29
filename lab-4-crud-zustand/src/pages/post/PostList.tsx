import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { type PostType, usePostStore } from '../../store/post.store'

type Props = {}

const PostList = (props: Props) => {
  const {showNonDeletedPosts} = usePostStore()
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(()=>{
    setPosts(showNonDeletedPosts)
  },[])
  return (
    <>
      <h1 className="font-bold text-2xl mb-3">Blog</h1>
      <div className='py-4'>
      <Link to="/posts/trash">See Trabsh Bin</Link>
      </div>

      <button className="pt-4 pb-8">
        <Link to="/posts/new">
        Add New Post</Link>
      </button>
      {
        posts.length===0?(
          <div className='text-center'>Nothing to shoe</div>
        ):(
      <section>
        {posts?.map(post => (
          <article key={post.id} className="border-b py-2">
            <Link to={`/posts/${post.id}`} className="underline text-sm">
              {post.title}
            </Link>
          </article>
        ))}
      </section>
        )

      }
    </>
  )
}

export default PostList