<template lang="pug">
   p TestComponent
</template>
<script>
import { mapGetters } from "vuex";

export default {
  // component(is='TestComponent')
  name: "TestComponent",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPage"]),
  },
  methods: {},
};
</script>
