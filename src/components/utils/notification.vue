<template>
    <div class="notification">
        <transition-group
            name="tr-anima"
            class="notification__list"
            tag="div"
        >
            <div
                class="notification__item"
                v-for="message in messages"
                :key="message.id"
            >
               <div class="notification__text">
                <span>{{message.name}}</span>
                   <i class="fa fa-check"></i>
               </div>
                <div class="notification__buttons">
                    <button v-if="rightButton.length">{{rightButton}}</button>
                    <button v-if="leftButton.length">{{leftButton}}</button>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "notification",
        props:{
            messages:{
                type: Array,
                default: () =>{
                    return []
                }
            },
            rightButton: {
                type: String,
                default: ''
            },
            leftButton: {
                type: String,
                default: ''
            },
            timeout: {
                type: Number,
                default: 3000
            }
        },
        methods: {
            hideNotification(){
                let vm = this;
                if (this.messages.length){
                    setTimeout(function () {
                       vm.messages.splice(vm.messages.length - 1, 1);
                    }, vm.timeout)
                }
            }
        },
        watch:{
          messages(){
              this.hideNotification()
          }
        },
        mounted() {
            this.hideNotification()
        }
    }
</script>

<style scoped lang="sass">
    .notification
        position: fixed
        top: 50px
        right: 40px
        z-index: 2
        &__list
            display: flex
            flex-direction: column
        &__item
            padding: 16px
            border: 1px solid #fff
            background-color: $green
            -webkit-border-radius: 4px
            -moz-border-radius: 4px
            display: flex
            height: 50px
            margin-bottom: 16px
        &__text
            span
                margin-right: 10px
    .tr-anima
        &-enter
            transform: translateX(120px)
            opacity: 0
        &-enter-active
            transition: all .6s ease
        &-enter-to
            opacity: 1
        &-leave
            height: 50px
            opacity: 1
        &-leave-active
            transition: transform .6s ease, opacity .6s, height .6s .2s
        &-leave-to
            height: 0
            transform: translateX(120px)
            opacity: 0
        &-move
            transition: transform .6s ease
</style>
