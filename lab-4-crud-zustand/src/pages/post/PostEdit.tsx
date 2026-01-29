import React, { useEffect, useState, type SubmitEvent } from 'react'
import { type PostType, usePostStore } from '../../store/post.store'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {}

const PostEdit = (props: Props) => {
  const {id} = useParams()
  const {readPost,editPost} = usePostStore()
  const [titleInput, setTitleInput] = useState<string>("")
  const [contentInput, setContentInput] = useState<string>("")
  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) return
    const post = readPost(id)

    if(post){
    setTitleInput(post?.title)
    setContentInput(post?.content)
    }
  },[id])

  const handleUpdate =(e:SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!id) return 
    const updates={
      title:titleInput,
      contentInput:contentInput
    }
    editPost(id,updates)
    navigate(`/posts/${id}`)

  }
  return (
    <div>
      <div>
        <h2>Edit your Post</h2>

      <form 
      onSubmit={handleUpdate}
      className='flex flex-col gap-4'>
        <div className='flex ga-4'>
          <label>Post Title:</label>
          <input type="text" name="title"
          className='border-b'
          value={titleInput}
          onChange={(e)=>setTitleInput(e.target.value)}/>
        </div>
        <div className='flex gap-4'>
          <label>Post Content:</label>
          <textarea name="content"
          value={contentInput}
          className='w-[250px] h-[50px] border-b'
          onChange={(e)=>setContentInput(e.target.value)}/>
        </div>

        <button type='submit'>Save</button>
      </form>
      </div>
    </div>
  )
}

export default PostEdit