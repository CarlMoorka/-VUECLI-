<template>
  <body v-cloak>
    <div class="logo">
        <center>
      <img :src="image" class="logo-ico">
      <div class="logIn-auth-title">{{TextAuth}}</div>
      <div class="logIn-auth-desc">{{LoginAuthText}}<span>{{ SUNSHINEText }}</span></div>
      <Form @submit="onSubmit">
        <div class="logIn-auth-content-input">
          <Field name="login" type="text" maxlength="16" placeholder="Введите логин" :rules="validateEmail" />
        </div> <!--Поле ввода Логина-->
          <div class="logIn-auth-content-input">
            <Field name="password" type="password" maxlength="16"  :placeholder="InputPassword" :rules="validateEmail" />
          </div><!--Поле ввода Пароля-->
          <ErrorMessage name="login" v-slot="{ message }"> 
          <div class="logIn-notify logIn-notify_error sds">{{message}}</div>
          </ErrorMessage>
            <button class="logIn-auth-content-button">{{VxodBTN}}</button> <!--Кнопка для входа на сервер-->
          </Form>
            <div class="logIn-auth-content-help">
            <div @click="goToPassPage" class="logIn-auth-content-help1">
              Забыли пароль?
            </div>
            <div class="logIn-auth-content-help2" @click="goToAccPage">
              У меня нет аккаунта
            </div>
          </div>
          <div class="logIn-auth-content-save">
            <div class="logIn-auth-content-save__check" v-on:click="save = !save" v-bind:class="{'savedBTN': save}"></div> <!--Квадратик "Запомнить меня-->
            <span>Запомнить меня</span>
          </div>
          <!--<div class="logIn-notify logIn-notify_access">Идёт проверка...</div>-->
          <!--<div class="logIn-notify ">Заполните все поля!</div> -->
        </center>
        <div class="Logo-Michael"></div>
<!--      <img :src="michael" class="Logo-Michael">-->
    </div>
  </body>
</template>

<script>
import image from "../assets/logo.png"
import michael from "../assets/player.d1ce410caf3a766e8a43.png"
import useVuelidate from '@vuelidate/core'
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data:() =>  ({
    form: {
      login: '',
      password: '',
    },
    save: false,
    image: image,
    michael: michael,
    SUNSHINEText:' SUNSHINE RolePlay',
    LoginAuthText:'Добро пожаловать на сервер',
    TextAuth: 'Авторизация',
    InputLogin: 'Введите логин',
    InputPassword: 'Введите пароль',
    VxodBTN: 'Войти на сервер'
  }),
  methods: {
  goToPassPage(){
    this.$router.push('/NowPass')
  },
    goToAccPage(){
    this.$router.push('/NowAcc')
 },
  onSubmit(values) {
      console.log(values, null);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Заполните все поля';
      }
      // if the field is not a valid email
      const regex = /^[A-Z]/i;
      if (!regex.test(value)) {
        return 'Используйте английскуй раскладку [A-Z]';
      }    
    },
  },
}
</script>

<style scoped>
[role=alert] {
  align-items: center;
    border-radius: 0.9259259259259258vh;
    bottom: 1.8518518518518516vh;
    color: #fff;
    display: flex;
    font-family: Geometria Regular;
    font-size: 1.8518518518518516vh;
    height: 5.555555555555555vh;
    justify-content: center;
    left: 50%;
    animation: ani 2.5s forwards;
    position: absolute;
    text-align: center;
    -webkit-transform: translate(-50%,100%);
    transform: translate(-50%,100%);
    transition: 0.35s;
    width: 35.18518518518518vh;
    top: 85%;
     background: rgba(255,51,51,.5);
    opacity: 1;
    transition: 0.35s;
}
</style>