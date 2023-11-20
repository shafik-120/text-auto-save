import { ref, reactive } from 'vue'
import router from '../router/index'

const auth = reactive({
    isAuth: true,
    signUpData: localStorage.getItem('signUpInfo'),
    loginData: localStorage.getItem('loginInfo'),
    userName: '',
    login(login){
        console.log(login);
        localStorage.setItem('loginInfo', JSON.stringify(login))
        console.log(this.signUpData)
    },
    signUP(signup){
        localStorage.setItem('signUpInfo', JSON.stringify(signup))
        console.log(signup);
        router.push('/login')
    },
    logout(){
        localStorage.clear()
    }
})

console.log('log ing data => ' + auth.loginData);
export { auth }
