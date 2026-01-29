import { v4 as uuidv4 } from 'uuid';
import { usePostStore, type PostType } from '../../store/post.store';
import { useState, type SubmitEvent } from 'react';
import { useNavigate, useNavigation, type HTMLFormMethod } from 'react-router-dom';


type Props = {}

const PostNew = (props: Props) => {
  const {addPost} = usePostStore()
  const [titleInput, setTitleInput] = useState<string>("")
  const [contentInput, setContentInput] = useState<string>("")
  const navigate = useNavigate()

  const handleSubmit = (e:SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const newPost:PostType={
      id:uuidv4(),
      title:titleInput,
      content:contentInput,
      isDeleted:false
    }

    addPost(newPost)

    navigate("/posts")
  }
  return (
    <div>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 p-4 mt-12'>
        <div className='flex gap-4'>
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

        <button type='submit'
        className='mt-8'>Save</button>
      </form>
      
    </div>
  )
}

export default PostNew