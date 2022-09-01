<template>
  <body v-cloak>
  <div class="logo">
    <v-row align="center" justify="center" alt="">
      <center>
        <img :src="image" class="logo-ico">
            <div class="logIn-auth-title">{{TextAuthDebug}}</div> <!--Текст восст аккаунта-->
        <div class="logIn-auth-desc">{{LoginAuthText}}</div>
        <Form @submit="onSubmit">
        <div class="logIn-auth-content-input">
          <input type="text" maxlength="16" v-model="login"  :placeholder="InputLogin"></div> <!--Поле ввода Почты-->
        <button class="logIn-auth-content-button">{{DebugBTN}}</button> <!--Кнопка для входа на сервер-->
        </form>
        <div class="logIn-auth-content-help-NowPass"><div @click="goToPassPage" class="logIn-auth-content-help-NowPass1">Вернуться назад</div></div>
        <div class="logIn-notify logIn-notify_error">Заполните все поля!</div> <!--Красная табличка-->
      </center>
    </v-row>
    <div class="Logo-Michael"></div>
    <!--      <img :src="michael" class="Logo-Michael">-->
  </div>
  </body>
</template>

<script>

import image from "../assets/logo.png"

import michael from "../assets/player.d1ce410caf3a766e8a43.png"

export default {
  data:() =>  ({
    image: image,
    michael: michael,
    form: {
      email: null,
    },
    LoginAuthText:'Если вы забыли логин или пароль, то введите данные ниже',
    TextAuthDebug: 'Восстановление аккаунта',
    InputLogin: 'Введите почту',
    inputValue: '',
    DebugBTN:'Восстановить Доступ'
  }),
  methods: {
    goToPassPage(){
      this.$router.push('/Head')
    },

  }
}

</script>


