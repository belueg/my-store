<script setup>
import { useCounterStore } from "../stores/useCounterStore";

const counterStore = useCounterStore()

counterStore.increment()
</script>

<template>
  <div class="about">
    <h1>This is an about page, but now I'm using it to test</h1>
    <p>Count: {{ counterStore.count }}</p>
    <p>{{ counterStore.doubleCountPlusOne }}</p>
  </div>
</template>
