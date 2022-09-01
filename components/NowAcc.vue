<template>
  <body v-cloak>
  <div class="logo">
    <v-row align="center" justify="center" alt="">
      <center>
        <img :src="image" class="logo-ico">
        <div class="logIn-auth-title">{{TextAuthReg}}</div> <!--Текст восст аккаунта-->
        <div class="logIn-auth-desc">{{LoginRegText}}<span>{{ SUNSHINEText }}</span></div>
        <div class="logIn-auth-content-input">
          <input type="text" maxlength="16" v-model="login"  :placeholder="InputEmail"> <!--Поле ввода Почты--></div>
        <div class="logIn-auth-content-input"> <input type="text" maxlength="16" v-model="login"  :placeholder="InputLogin"> <!--Поле ввода Логин--></div>
          <div class="logIn-auth-content-input"><input type="text" maxlength="16" v-model="login"  :placeholder="InputPass"> <!--Поле ввода Пароль--></div>
            <div class="logIn-auth-content-input"> <input type="text" maxlength="16" v-model="login"  :placeholder="InputPromo"> <!--Поле ввода промо--></div>


        <div class="logIn-auth-content-button">{{DebugBTN}}</div> <!--Кнопка для входа на сервер-->
        <div class="logIn-auth-content-help-NowPass"><div @click="goToPassPage" class="logIn-auth-content-help-NowPass1">У меня есть аккаунт</div></div>
        <div class="logIn-notify logIn-notify_error ">Заполните все поля!</div> <!--Красная табличка-->
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
    SUNSHINEText:' SUNSHINE RolePlay',
    LoginRegText:'Добро пожаловать на сервер',
    TextAuthReg: 'Регистрация',
    InputEmail: 'Введите почту',
    InputLogin: 'Придумайте логин',
    InputPass: 'Придумайте пароль',
    InputPromo: 'Введите промокод (Если есть)',
    inputValue: '',
    DebugBTN:'Восстановить Доступ',
  }),
  methods: {
    goToPassPage(){
      this.$router.push('/Head')
    }
  }
}

</script>


