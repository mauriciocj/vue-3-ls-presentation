<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import PostCard from '@/components/PostCard.vue';
import { usePostStore } from '../stores/posts';

export interface Post {
  author: string;
  content: string;
}

const author = ref('');
const content = ref('');
const posts = ref<Post[]>([])
const filteredPosts = computed(() => posts.value.filter(post => post.content.length > 3))
const postStore = usePostStore();


const addPost = (e: Event) => {
  e.preventDefault();
  postStore.addPost({
    author: author.value,
    content: content.value
  })
  author.value = ''
  content.value = ''
}

watch(author, (newValue, oldValue) => {
  // console.log({
  //   newValue, oldValue
  // });
})

const onCardClick = (value: string) => {
  console.log('card clicked', value);
  
}
</script>

<template>
  <main class="container">
    <h1>Posts</h1>
    <form>
      <div class="grid">
        <label for="name">
          Author name
          <input type="text" id="name" name="name" placeholder="Author name" v-model="author">
        </label>
      </div>
      <label for="content">Content</label>
      <textarea id="content" name="content" v-model="content"></textarea>

      <button type="submit" @click="addPost">Submit</button>

    </form>
    
    <div class="divider"></div>

    <div class="grid">
      <PostCard :post="post" v-for="(post, index) in postStore.posts" :key="index" @clicked="onCardClick"/>
    </div>
    
  </main>
</template>

<style scoped lang="scss">
.divider{
  height: 2px;
  background-color: gray;
  margin: 8px 0;
}

.grid {
  grid-template-columns: repeat(4, 1fr);
}


</style>
