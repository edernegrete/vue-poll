<template>
  <div class="card">
    <label>{{title}}</label>
    <div class="card-list">
      <ul>
        <li v-for="item in items">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      value: '',
    },
    items: {
      type: Array,
    },
  },
};
</script>
