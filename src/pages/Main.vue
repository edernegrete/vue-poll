<template>
  <div id="app">
    <div v-if="loading">
      <spinner></spinner>
    </div>
    <div v-if="!loading && !success">
      <p class="title">Which one do you prefer?</p>
      <Poll class="Poll" :options="options" @optionSelected="handleEvent">
      </Poll>
    </div>
    <div v-if="success" class="success-message active">
      <svg viewBox="0 0 76 76" class="success-message__icon icon-checkmark">
          <circle cx="38" cy="38" r="36"/>
          <path fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.7,40.9l10.9,10.9l28.7-28.7"/>
      </svg>
      <h1 class="success-message__title">We recived your answers</h1>
    </div>
  </div>
</template>

<script>
import Poll from '../components/PollComponent';
import Spinner from '../components/Spinner';
import { getPoll, sendAnswers } from '../api/requests';

export default {
  name: 'Main',
  components: {
    Poll,
    Spinner,
  },
  data() {
    return {
      options: [],
      loading: false,
      success: false,
    };
  },
  computed: {
    current() {
      return this.$store.getters.currentPoll;
    },
    answers() {
      return this.$store.getters.getAnswers;
    },
  },
  watch: {
    current(id) {
      this.setPoll(id);
    },
  },
  mounted() {
    const id = this.current;
    this.setPoll(id);
  },
  methods: {
    setPoll(id) {
      this.loading = true;
      getPoll(id).then((res) => {
        this.options = res;
        this.loading = false;
      });
    },
    handleEvent(data) {
      this.$store.dispatch('setAnswer', data);
      if (!data.isLast) {
        let current = this.current;
        this.$store.dispatch('setValue', current += 1);
      } else {
        this.loading = true;
        sendAnswers(this.answers).then(() => {
          this.success = true;
          this.loading = false;
        });
      }
    },
  },
};
</script>

<style>

.title {
  font-size: 4rem;
  text-align: center;
}

.Poll {
  font-size: 5rem;
}


p {
  margin: 0;
}

@media only screen and (max-width: 1000px) {
  .Poll {
    font-size: 2rem;
  }

  .PollContent {
    flex-direction: column;
  }

  .Poll-option {
    margin-bottom: 1rem;
  }

}
.success-message {
  text-align: center;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.success-message__icon {
  max-width: 75px;
}

.success-message__title {
  color: #3DC480;
  transform: translateY(25px);
  opacity: 0;
  transition: all 200ms ease;
}
.active .success-message__title {
  transform: translateY(0);
  opacity: 1;
}

.icon-checkmark circle {
  fill: #3DC480;
  transform-origin: 50% 50%;
  transform: scale(0);
  transition: transform 200ms cubic-bezier(0.22, 0.96, 0.38, 0.98);
}
.icon-checkmark path {
  transition: stroke-dashoffset 350ms ease;
  transition-delay: 100ms;
}
.active .icon-checkmark circle {
  transform: scale(1);
}

</style>
