<template lang="pug">
   p InstallStepWin
</template>
<script>
import { mapGetters } from "vuex";

export default {
  // component(is='InstallStepWin')
  name: "InstallStepWin",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPage"]),
  },
  methods: {},
};
</script>
