import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type PostType, usePostStore } from '../../store/post.store'
import toast from 'react-hot-toast'

type Props = {}

const PostDetail = (props: Props) => {
  const {id} = useParams()
  const {readPost, deletePost} = usePostStore()
  const [post, setPost] = useState<PostType|null>(null)

  useEffect(()=>{
    if(!id) return
    const posting =  readPost(id)
    if(!posting){
      console.log("Cannot fing a post")
      return
    }
    setPost(posting)
  },[id, post])

  const deleteHandler =()=>{
    if(!post) return
    deletePost(post?.id)
    toast("Post has been in Transh")
  }
  return (
    <div>
      <div className='flex'>
        Title:
        <div>{post?.title}</div>
      </div>
      <div className='flex'>
        Content:
        <div>
          {post?.content}
        </div>
      </div>


      <div className='flex gap-6'>
          <button>
              <Link
              to={`/posts/${post?.id}/edit`}>
              Edit Post
              </Link>
          </button>
          <button
          onClick={()=>deleteHandler()}>
              Delete Article
          </button>
      </div>
    </div>
  )
}

export default PostDetail