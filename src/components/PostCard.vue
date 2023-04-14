<script setup lang="ts">
import { inject, ref } from 'vue';
import type { Post } from '../views/PostsView.vue';

defineProps<{
    post: Post;
}>()

const injectedValue = inject('key')

const emit = defineEmits<{
    (e: 'clicked', value: string): void;
    (e: 'created', value: number): void;
}>()

// emit('clicked', 'value')


// console.log('injectedValue', injectedValue);


</script>

<template>
    <article class="card" @click="$emit('clicked', post.author)">
        <span class="author">
            {{ post.author }}
        </span>
        {{ post.content }}
    </article>
</template>

<style scoped lang="scss">
.card {
    .author {
        font-size: 14px;
        color: gray;
        display: block;
        font-style: italic;
    }
}
</style>