<template>
    <div class="wrapper">
        <h1>{{title}}</h1>
        <keep-alive>
           <transition name="show" mode="out-in">
                <router-view>
                </router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "wrapper",
        data () {
            return {
                title: 'E-shop'
            }
        },
        computed:{
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style lang="scss" >
    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 900px;
        margin: 0 auto;
    }
    h1 {
        text-align: center;
    }


    .show-enter-active{
        animation: showIn 0.01s;
    }


    .show-leave-active{
        animation: showOut 0.05s;
    }

    @keyframes showOut{
        from{opacity: 1;}
        to{opacity: 0;}
    }

    @keyframes showIn{
        from{opacity: 0;}
        to{opacity: 1;}
    }

</style>
