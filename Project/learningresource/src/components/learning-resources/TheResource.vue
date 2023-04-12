<template>
  <base-card>
    <!-- I can do add the eventlistener to the custom element! which is called fallthrough to the root element-->
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >Store Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resources
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    "stored-resource": StoredResource,
    "add-resource": AddResource,
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resource" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  data() {
    return {
      selectedTab: "stored-resource",
      storedResources: [
        {
          id: "official-guide",
          title: "official-guide",
          description: "Lorem ipsum",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "google",
          description: "Lorem ipsum",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
