<template>
  <footer class="footer">
    <v-btn :class="{'footer__btn_deactive' : $store.getters.getStatusApp === 1}" class="footer__btn footer__btn_back" color="transparent" @click.prevent="previousStep()">
      <v-icon class="footer__btn-icon" color="#109CF8">
        mdi-arrow-left
      </v-icon>
      <span>
        Назад
      </span>
    </v-btn>
    <div class="footer__wrap">
      <BaseProgress class="footer__progress" :step="$store.getters.getStatusApp" :total="3" :color="'109CF8'" :size="60" />
      <a
        class="footer__link"
        target="_blank"
        href="https://ranks.pro/persondata"
      >
        Отправляя данные вы соглашаетесь
        <span>
          с политикой конфиденциальности
        </span>
      </a>
    </div>

    <v-btn
      :class="{'footer__btn_deactive': $store.getters.getStatusApp === 3 && ($store.getters.getName.length < 3 || $store.getters.getPhone.length < 12)}"
      class="footer__btn footer__btn_next"
      :color="$store.getters.getStatusApp !== 3 ? 'transparent' : '#109CF8'"
      @click.prevent="nextStep()"
    >
      <span v-if="$store.getters.getStatusApp !== 3">
        Вперед
      </span>
      <v-icon v-if="$store.getters.getStatusApp !== 3" class="footer__btn-icon" color="#109CF8">
        mdi-arrow-right
      </v-icon>
      <div v-if="$store.getters.getStatusApp === 3" class="footer__text-submit" style="color: #fff !important;">
        Отправить
      </div>
      <img v-if="$store.getters.getStatusApp === 3" class="footer__btn-icon-submit" :src="require(`~/assets/images/submit-icon.svg`)">
    </v-btn>
  </footer>
</template>

<script>
export default {
  methods: {
    async nextStep () {
      if (this.$store.getters.getStatusApp < 3) {
        this.$store.commit('setStatusApp', this.$store.getters.getStatusApp + 1)
      } else {
        await this.$store.dispatch('submit')
        this.$store.commit('setStatusApp', 4)
      }
    },
    previousStep () {
      this.$store.commit('setStatusApp', this.$store.getters.getStatusApp - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}

.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: sizeIncr(16, 32) sizeIncr(16, 32) 3px ;
  color: var(--color-text-1);
  background-color: #fff !important;
  &:hover {
    background-color: #fff !important;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  &__progress {
    margin-bottom: sizeIncr(15, 20);
  }
  &__link {
    max-width: sizeIncr(224, 500);
    font-size: 12px;
    color: var(--color-text-1) !important;
    text-align: center;
    span {
      color: var(--color-text-2) !important;
    }
  }

  &__btn {
    border: 2px solid var(--color-border-2) !important;
    width: sizeIncr(64, 207);
    height: 56px !important;
    color: var(--color-text-2);
    @include transition;
    position: absolute !important;
    inset: 0 auto auto 0;
    &_next {
      inset: 0 0 auto auto;
    }
    @media (min-width: 768px) {
      position: relative !important;
      inset: auto auto auto auto;
    }
    &_deactive {
      pointer-events: none;
      opacity: 0;
    }
    span {
      display: none;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      @media (min-width: 768px) {
        display: flex;
      }
    }
  }
  &__text-submit {
    color: #fff;
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  &__btn-icon-submit {
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
