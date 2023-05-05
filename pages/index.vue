<template>
  <v-app>
    <main class="app">
      <div class="app__wrap">
        <BaseHeader class="app__header" />
        <div class="app__content-wrap">
          <KeepAlive class="app__keep-alive">
            <component
              :is="current"
              class="app__content"
            />
          </KeepAlive>
        </div>
        <BaseFooter v-if="$store.getters.getStatusApp !== 4" class="app__footer" />
      </div>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    current () {
      let value
      if (this.$store.getters.getStatusApp === 2) {
        value = 'SecondStep'
      } else if (this.$store.getters.getStatusApp === 3) {
        value = 'ThirdStep'
      } else if (this.$store.getters.getStatusApp === 4) {
        value = 'FourthStep'
      } else {
        value = 'FirstStep'
      }
      return value
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(20,22,25,1);
  background: linear-gradient(150deg, rgba(0,191,255,1) 0%, rgba(20,22,25,1) 25%,  rgba(20,22,25,1) 50%,  rgba(20,22,25,1) 75%, rgba(0,191,255,1) 100%);
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: sizeIncr(8, 17) sizeIncr(8, 97);
    width: sizeIncr(328, 1200);
    max-width: #{$maxvw}px;
    min-height: sizeIncr(608, 743);
    border-radius: 13px;
    background-color: #fff;
  }
  &__content-wrap {
    margin-bottom: auto;
  }
  &__header {
    margin-bottom: sizeIncr(15, 50);
  }
  &__header,
  &__footer {
    width: 100%;
  }
}
</style>
