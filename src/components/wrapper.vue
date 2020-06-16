<template>
    <div class="wrapper">
        <h1>{{title}}</h1>
        <keep-alive>
            <router-view>
<!--            <catalog />-->
<!--            <cart-->
<!--                v-if="CART.length"-->
<!--                :cart_data="CART"-->
<!--            />-->
            </router-view>
        </keep-alive>
    </div>
</template>

<script>
    // import catalog from "./catalog";
    // import cart from "./cart";
    import {mapGetters} from 'vuex';

    export default {
        name: "wrapper",
        data () {
            return {
                title: 'E-shop'
            }
        },
        // components:{
        //     catalog, cart
        // },
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


</style>
