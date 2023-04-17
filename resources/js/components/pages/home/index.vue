<template>
    <Landing/>
    <Projects/>
</template>
<script>
import Landing from './landing.vue';
import Projects from './projects.vue';
export default {
    name:'homepage',
    components: {
        Landing, Projects
    }
  }
</script>