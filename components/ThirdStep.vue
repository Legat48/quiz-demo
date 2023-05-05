vue
<template>
  <div class="test">
    <h2 class="test__title">
      КОНТАКТЫ  ДЛЯ  ОБРАТНОЙ  СВЯЗИ
    </h2>
    <!-- Инпут для ввода имени -->
    <v-text-field
      v-model="name"
      class="test__input"
      label="Ваше имя"
      placeholder="Имя"
    />

    <!-- Инпут для ввода телефона -->
    <v-text-field
      v-model="phone"
      label="Ваш телефон"
      class="test__input"
      placeholder="+7 (999) 999-9999"
      persistent-hint
      :hint="`Введите номер телефона в формате: +7 (999) 999-9999`"
    />
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get () {
        return this.$store.getters.getName
      },
      set (value) {
        this.$store.commit('setName', value)
      }
    },
    phone: {
      get () {
        return this.$store.getters.getPhone
      },
      set (value) {
        if (value && `${value}`.substr(0, 1) !== '+') {
          value = '+7'
        }
        value = value.replace(/[a-zа-яё]/gi, '')
        this.$store.commit('setPhone', value)
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.test {
  width: 100%;
  &__title {
    margin-bottom: sizeIncr(22, 44);
    width: 100%;
    text-align: center;
    font-family: 'DelaGothicOne';
    font-size: sizeIncr(12, 20);
    line-height: 140%;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    margin-bottom: sizeIncr(13, 20);
    width: 100%;
    @media (min-width: 768px) {
      padding-left: sizeIncr(40, 120);
      width: 48%;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: sizeIncr(13, 20);

    border: 2px solid var(--color-border-2);
    border-radius: 105px;
    width: 26px;
    height: 26px;
  }
  &__icon {
    width: 26px;
    height: 26px;
    opacity: 0;
    @include transition;
    &_active {
      opacity: 1;
    }
  }
  &__text {
    margin-bottom: 0;
    font-weight: 600;
    font-size: sizeIncr(14, 18);
    line-height: 120%;
  }
}
</style>

<style lang="scss">
.test {
  .v-label {
    height: 52px !important;
    font-family: 'DelaGothicOne' !important;
    font-size: sizeIncr(12, 20) !important;
    line-height: 140% !important;
    color: var(--color-text-1) !important;

  }
  input {
    height: 52px !important;
  }
  input::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 140%;
    text-transform: uppercase;
  }
}
</style>
