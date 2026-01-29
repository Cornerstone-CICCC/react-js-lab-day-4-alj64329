import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PostType{
    id:string,
    title:string,
    content:string,
    isDeleted:boolean
}

interface PostStore {
  posts: PostType[];
    showNonDeletedPosts:()=>PostType[],
    showDeletedPosts:()=>PostType[]
    readPost:(postId:string)=>PostType | undefined,
    addPost:(newPost:PostType)=>void
    editPost:(postId: string, updates: Partial<PostType>)=>void
    deletePost:(postId:string)=>void
    recoverPost:(postId:string)=>void
    PDeletePost:(postId: string) => void;
}

export const usePostStore = create<PostStore>()(
    persist(
        (set, get)=>({
    posts:[],
    showNonDeletedPosts:()=>{
        return get().posts.filter((post) => !post.isDeleted)
    },
    showDeletedPosts:()=>{
        return get().posts.filter((post) => post.isDeleted)
    },
    readPost:(postId)=>{
        return get().posts.find((p)=>p.id===postId)
    },
    addPost:(newPost)=>set((state)=>({
        posts: [...state.posts, newPost]
    })),
    editPost:(postId, updates)=>{
        set((state)=>({
            posts: state.posts.map(post=>
                post.id === postId? {...post, ...updates}:post
            )
        }))
    },
    deletePost:(postId)=>set((state)=>({
        posts: state.posts.map((p)=>
        p.id === postId?{...p, isDeleted:true}:p)
    })),
    recoverPost:(postId)=>set((state)=>({
        posts: state.posts.map((p)=>
        p.id === postId?{...p, isDeleted:false}:p)
    })),
    PDeletePost:(postId)=>{
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== postId),
    }))
    }

}),{
    name:"post-storage"
}
)
)