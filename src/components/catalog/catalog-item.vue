<template>
    <div class="catalog-item">
        <div class="catalog-item__inner">
            <Popup
                v-if="isPopupOpen"
                @closePopup="closePopup"
                rightBtnTitle="add to cart"
                @rightBtnAction="addToCart"
            >
                <img :src="product_data.image" alt="img">
                <p class="catalog-item__name">{{product_data.name}}</p>
                <p class="catalog-item__price rubles">
                    {{product_data.price}}
                    <i class="fa fa-rub" aria-hidden="true"></i>
                </p>
            </Popup>

            <img :src="product_data.image" alt="img">
            <p class="catalog-item__name">{{product_data.name}}</p>
            <p class="catalog-item__price rubles">
                {{product_data.price}}
                <i class="fa fa-rub" aria-hidden="true"></i>
            </p>
            <button
                class="btn btn_reverse"
                @click="showPop"
            >Show info</button>
            <button
                class="btn catalog-item__btn"
                @click="addToCart"
            >
                Add To Cart
            </button>
        </div>
    </div>
</template>

<script>
    import Popup from "../utils/popup";
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
        components: {
            Popup
        },
        data(){
            return{
                isPopupOpen: false
            }
        },
        methods: {
            addToCart(val) {
               this.$emit('addToCart', this.product_data)
            },
            showPop(){
                this.isPopupOpen = true;
                document.querySelector('html').classList.add('fixed')
            },
            closePopup(){
                this.isPopupOpen = false;
                document.querySelector('html').classList.remove('fixed')
            },
        },
        mounted() {
            this.$set(this.product_data, 'quantity', 1)
        }
    }
</script>

<style scoped lang="scss">
    .catalog-item {
        margin-bottom: 25px;
        text-align: center;
        width: 33%;
        padding: 0 15px;
        &__inner {
            padding: 20px;
            box-shadow: 0 0 8px 0 #e0e0e0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100px;
        }
        .btn {
            min-width: 120px;
        }
    }

    .btn_reverse {
        margin-bottom: 10px;
    }


    @media only screen and (max-width: 997px){
        .catalog-item{
            width: 50%;
        }
    }
    @media only screen and (max-width: 767px){
        .catalog-item {
            padding: 0 8px;
        }
    }

    @media only screen and (max-width: 575px) {
        .catalog-item {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
        }
    }


</style>
