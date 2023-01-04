<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment">Click me</button>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    // console.log(num);

    function increment() {
      num.value++;
    }

    const user = reactive({
      name: "John",
      age: 20,
    });

    setTimeout(() => {
      user.name = "Luis";
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user),
    };
  },
};
</script>
