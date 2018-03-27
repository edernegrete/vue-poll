  <template>
  <div class="PollComponent">
    <div class="PollContent">
      <div class="Poll-option" v-for="option in options" @click="optionSelected(option)">
          <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PollComponent',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    optionSelected(option) {
      this.$emit('optionSelected', option);
    },
  },
};
</script>

<style>
  .PollComponent {
    width: 80%;
    margin: 2rem auto;
  }
  .PollContent {
    display: flex;
    justify-content: space-between;
  }
  .Poll-option {
    border: 2px solid #4BA0EC;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 20px;
    color: #1DA1F2;
    text-align: center;
    transition: .5s all ease;
  }
  .Poll-option:hover {
    background-color: #ECF5FC;
  }
  .Poll-option:active {
    transform: scale(0.9);
  }
</style>
