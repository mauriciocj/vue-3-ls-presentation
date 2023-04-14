import { defineStore } from "pinia";
import type { Post } from "@/views/PostsView.vue";
import { ref } from "vue";

export const usePostStore = defineStore('posts', () => {
    const posts = ref<Post[]>([])

    const addPost = (post: Post) => {
        posts.value.push({
            author: post.author,
            content: post.content
        });
    } 

    return {
        posts,
        addPost
    }
})