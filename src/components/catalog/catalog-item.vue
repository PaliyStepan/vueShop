<template>
    <div class="catalog-item">
        <img :src=" require('@/assets/images/' + product_data.image) " alt="img">
        <p class="catalog-item__name">{{product_data.name}}</p>
        <p class="catalog-item__price">{{product_data.price}}</p>
        <button
            class="btn catalog-item__btn"
            @click="addToCart"
        >
            Add To Cart
        </button>
    </div>
</template>

<script>
    export default {
        name: "catalog-item",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            addToCart(val) {
               this.$emit('addToCart', this.product_data)
            }
        },
        mounted() {
            this.$set(this.product_data, 'quantity', 1)
        }
    }
</script>

<style scoped lang="scss">
    .catalog-item {
        box-shadow: 0 0 8px 0 #e0e0e0;
        width: calc(30% - 40px);
        margin-bottom: 25px;
        text-align: center;
        padding: 20px;
        img {
            width: 100px;
        }
    }


    @media only screen and (max-width: 767px){
        .catalog-item{
            width: calc(50% - 30px);
            padding: 20px 10px;
        }
    }
    @media only screen and (max-width: 479px){
        .catalog-item{
            width: 100%;
            padding: 20px 10px;
        }
    }
</style>
