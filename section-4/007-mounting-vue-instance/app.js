let vm = Vue.createApp({
  data() {
    return {
      message: "Hello, World!",
    };
  },
  // template: `{{ message }}`,
});

vm.mount("#app");

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello, World!",
//     };
//   },
//   render() {
//     return Vue.h("h1", this.message);
//   },
// }).mount("#app2");
