<template>
  <!-- :limit="1" -->
  <div>
    <!-- :auto-select-ancestors="true"
      :flat="true"
      :auto-load-root-options="false" -->
    <treeselect
      :options="options"
      :multiple="true"
      v-model="value"
      placeholder="Hello from the other side"
      :show-count="true"
      value-format="object"
      :max-visible-children="2"
      />

    <pre>
      {{ value }}
    </pre>
  </div>
</template>

<script>
  import options from '../data'

  export default {
    data() {
      return {
        options,
        value: null,
      }
    },
  }
</script>
