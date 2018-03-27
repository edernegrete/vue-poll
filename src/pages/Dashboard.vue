<template>
  <div id="dashboard">
    <div v-if="!loading">
      <h1>Today Info</h1>
      <h2>Today were submitted: {{dashboard.total}} answers</h2>
      <div class="graphs">
        <PercentageCard
        v-for="(value, key) in dashboard.percentages"
        :key="key"
        :title="value.text"
        :percentage="value.percentage"/>
      </div>
      <h2>All answers</h2>
      <div class="info">
        <InfoCard
          v-for="(item, key) in dashboard.answers"
          :key="key"
          :title="new Date(item.timestamp).toString()"
          :items="item.data"/>
      </div>
    </div>
    <div v-if="loading">
      <spinner></spinner>
    </div>
  </div>
</template>

<script>
import PercentageCard from '../components/PercentageCard';
import Spinner from '../components/Spinner';
import InfoCard from '../components/InfoCard';
import { dashboard } from '../api/requests';

export default {
  name: 'Dashboard',
  components: {
    PercentageCard,
    Spinner,
    InfoCard,
  },
  data() {
    return {
      dashboard: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    dashboard().then((res) => {
      this.dashboard = res;
      this.loading = false;
    });
  },
};
</script>

<style>
  .card {
    box-shadow: 1px 1px 1px rgba(3,21,34,0.1);
    text-align: center;
    max-width: 300px;
    padding: 1rem;
  }
  .graphs, .info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
