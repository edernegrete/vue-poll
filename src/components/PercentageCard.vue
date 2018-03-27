<template>
  <div class="card">
          <label>
            {{title}}
          </label>
          <div>
            <div>
              <VueCircle
                :progress="percentage"
                :size="100"
                :reverse="false"
                line-cap="round"
                empty-fill="rgba(0, 0, 0, .1)"
                :animation-start-value="0.0"
                :start-angle="0"
                insert-mode="append">
              </VueCircle>
            </div>
          </div>
        </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress';

export default {
  name: 'PercentageCard',
  components: {
    VueCircle,
  },
  props: {
    title: {
      type: String,
      value: '',
    },
    percentage: {
      type: Number,
      value: 0,
    },
  },
};
</script>
