<template>
  <base-card>
    <!-- I can do add the eventlistener to the custom element! which is called fallthrough to the root element-->
    <base-button @click="setSelectedTab('stored-resource')"
      >Store Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
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
  data() {
    return {
      selectedTab: "stored-resource",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
