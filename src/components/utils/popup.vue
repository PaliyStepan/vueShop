<template>
    <transition name="fade" appear>
        <div class="popup" ref="popup">
            <div class="popup__inner">
                <div class="popup__header">
                    <span class="popup__close">
                        <i class="fa fa-times"
                           @click="closePopup"
                        ></i>
                    </span>
                </div>
                <div class="popup__content">
                    <slot></slot>
                </div>
                <div class="popup__footer">
                    <button
                        class="btn btn_reverse"
                        @click="closePopup"
                    >Close</button>
                    <button
                        class="btn"
                        @click="rightBtnAction"
                    >{{rightBtnTitle}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "popup",
        props: {
          rightBtnTitle:{
              type: String,
              default: 'Ok'
          }
        },
        methods: {
            closePopup(){
                this.$emit('closePopup')
            },
            rightBtnAction(){
                this.$emit('rightBtnAction')
            }
        },
        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if (item.target === vm.$refs['popup']){
                    vm.closePopup()
                }
            })
        }
    }
</script>

<style scoped lang="sass">

    .fade-enter-active, .fade-leave-active
        transition: opacity .2s ease
    .fade-enter, .fade-leave-active
        opacity: 0




    .popup
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: rgba(#000, .6)
        overflow: auto
        z-index: 4
        &__close
            width: 30px
            height: 30px
            display: inline-flex
            align-items: center
            justify-content: center
            cursor: pointer
            transition: all 0.2s
            &:hover
                background-color: $green
                color: #fff
        &__inner
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%,-50%)
            width: 400px
            background-color: #ddd
            padding: 25px
            -webkit-border-radius: 5px
            -moz-border-radius: 5px
            border-radius: 5px
            overflow: auto
            margin: 15px 0 15px
        &__header
            display: flex
            align-items: center
            justify-content: flex-end
            margin-bottom: 10px
        &__footer
            display: flex
            flex-direction: column
            align-items: center
            .btn
                width: 120px
                margin-bottom: 20px

        @media only screen and (max-width: 575px)
            .popup
                &__inner
                    width: 95%
                    top: 20px
                    transform: translateX(-50%)

</style>
