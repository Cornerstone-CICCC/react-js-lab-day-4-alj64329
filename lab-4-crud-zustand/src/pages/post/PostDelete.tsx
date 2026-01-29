import React, { useEffect, useState } from 'react'
import { type PostType, usePostStore } from '../../store/post.store'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

type Props = {}

const PostDelete = (props: Props) => {
  const {showDeletedPosts, recoverPost, PDeletePost} = usePostStore()
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(()=>{
    setPosts(showDeletedPosts)
  },[])

  const handleRecover =(post:PostType)=>{
    recoverPost(post.id)
    toast("The post has been recovered")
    setPosts(prev=>prev.filter(p=>p.id!==post.id))
  }

  const handleDelete =(post:PostType)=>{
    toast("The post has been permanently deleted")
    PDeletePost(post.id)
    setPosts(prev=>prev.filter(p=>p.id!==post.id))
  }

  

  return (
    <>
      <h1 className="font-bold text-2xl mb-3">Blog</h1>
      <div className='py-8'>
      <Link to="/posts">Back to List</Link>
      </div>

      <section>
        {posts?.map(post => (
          <article key={post.id} className="border-b py-2">
              <div className='flex justify-between'>
                <div>{post.title}</div>
                <div className='flex gap-8'>
                <button
                className='bg-black text-white py-1 px-2 cursor-pointer rounded-2xl'
                onClick={()=>handleRecover(post)}>Recover</button>
                <button
                className='bg-black text-white py-1 px-2 cursor-pointer rounded-2xl'
                onClick={()=>handleDelete(post)}>Delete</button>
                </div>
                </div>
          </article>
        ))}
      </section>
    </>
  )
}

export default PostDelete