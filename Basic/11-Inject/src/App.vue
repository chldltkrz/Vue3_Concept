<template>
  <div>
    <!-- provide & inject works in parent-child relationship
          not in the naighbor relationship!
    -->
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <!-- <knowledge-base @select-topic="activateTopic"></knowledge-base> -->
    <knowledge-base></knowledge-base>
  </div>
</template>
<!-- NOTE!
      that props and Custom Event CANNOT be replace with provide and inject model!
      each of them has their own pro and cons
      props and Custom Event is the default
      If passThrough component is used then provide inject is your guy
      Its tough to go over all the injected value in all components! It is quite tough!
-->

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: "basics",
          title: "The Basics",
          description: "Core Vue basics you have to know",
          fullText:
            "Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!",
        },
        {
          id: "components",
          title: "Components",
          description:
            "Components are a core concept for building Vue UIs and apps",
          fullText:
            "With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.",
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    // if have duplicate obbject,
    // 1. its duplicate of code
    // 2. the change of the data will not be reflected to the topic provided
    return {
      topics: this.topics,
      // since K-element is listening on selectTopic method name, we gatta pass the activateTopic Method as passing method
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>
