<template>
  <div class="test">
    <ul class="test__list">
      <li v-for="item in testItem" :key="item.id" class="test__item">
        <p class="test__number">
          0{{ item.id }}
        </p>
        <a :href="item.link" target="_blank" class="test__link">
          <span class="test__link-text">
            {{ item.text }}
          </span>
          <span v-if="item.subtext">
            {{ item.subtext }}
          </span>
        </a>
      </li>
      <AppLink class="test__link-wrap" />
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testItem: [
        {
          id: 1,
          text: 'Посетить телеграмм  бота ',
          subtext: ' для  ознакомления  продуктами  компании  Ranks',
          link: 'https://t.me/ranks_pro_bot'
        },
        {
          id: 2,
          text: 'Заказать портфель топовых акций РФ',
          link: 'https://ranks.pro/port'
        },
        {
          id: 3,
          text: 'Установить мобильное приложение',
          link: 'https://ranks.pro/app'
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
  &__list,
  &__item {
    padding: 0 !important;
    display: flex;
    flex-direction: column;
  }
  &__btn {
    display: flex;
    align-items: center;
    margin-bottom: sizeIncr(13, 20);
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 768px) {
      margin-bottom: 0;
      flex-direction: column;
      margin-right: sizeIncr(10, 50);
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__number {
    margin-bottom: 6px;
    font-family: 'DelaGothicOne';
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--color-text-1);
  }
  &__link {
    margin-bottom: 20;
    font-family: 'DelaGothicOne';
    font-weight: 500;
    font-size: sizeIncr(12, 16);
    line-height: 120%;
  }
  &__link-text {
    color: var(--color-text-2);
  }
  &__link-wrap {
    margin-top: sizeIncr(10, 20);
  }
}
</style>
