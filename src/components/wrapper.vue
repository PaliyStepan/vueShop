<template>
    <div class="wrapper">
        <h1>{{title}}</h1>
        <keep-alive>
            <router-view>
            </router-view>
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

</style>
