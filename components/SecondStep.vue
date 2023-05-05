<template>
  <div class="test">
    <h2 class="test__title">
      СУММА   ВАШЕГО   ПОРТФЕЛЯ   АКЦИЙ?
    </h2>
    <div class="test__list">
      <button
        v-for="item in testItem"
        :key="item.id"
        class="test__btn btn"
        @click.prevent="changeСhoice(item.id)"
      >
        <div
          class="test__img"
        >
          <img :class="{'test__icon_active': item.active}" class="test__icon" :src="require(`~/assets/images/daw.svg`)">
        </div>
        <p class="test__text" style="text-align: start;">
          {{ item.text }}
        </p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testItem: [
        {
          id: 1,
          text: 'Пока еще нет портфеля, но интересуюсь',
          active: true
        },
        {
          id: 2,
          text: '10 000 - 100 000₽',
          active: false
        },
        {
          id: 3,
          text: '100 000 - 500 000₽',
          active: false
        },
        {
          id: 4,
          text: '500 000 - 2 500 000₽',
          active: false
        },
        {
          id: 5,
          text: '2 500 000₽ и выше',
          active: false
        }
      ]
    }
  },

  methods: {
    changeСhoice (id) {
      this.testItem.forEach((e) => {
        if (e.id === id) {
          e.active = true
        } else {
          e.active = false
        }
      })
    }
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
