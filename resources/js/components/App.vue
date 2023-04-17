<template>
    <div>
        <Topbar />
        <router-view/>
    </div>
</template>
<script>
import Topbar from './navbar/topbar.vue';
export default {
  name:'app',
  components: {
    Topbar
  }
}
</script>