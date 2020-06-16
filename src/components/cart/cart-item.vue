<template>
    <div class="cart-item">
        <div class="cart-item__img">
            <img :src=" require('@/assets/images/' + cart_item_data.image) " alt="img">
        </div>
        <div class="cart-item__info">
            <p>
                <i>Название</i>
                <strong>{{cart_item_data.name}}</strong>
            </p>
            <p>
                <i>Цена</i>
                <strong>{{cart_item_data.price}}</strong>

            </p>
            <p>
                <i>Артикул</i>
                <strong>
                    {{cart_item_data.article}}
                </strong>
            </p>
        </div>
        <div class="cart-item__amount">
            <div class="cart-item__amount-inner">
                <button class="btn cart-item__control"
                     @click="subItem"
                >
                    -
                </button>
                {{cart_item_data.quantity}}
                <button class="btn cart-item__control"
                    @click="addItem"
                >
                    +
                </button>
            </div>
        </div>
        <button
            class="btn cart-item__btn"
            @click="deleteFromCart"
        >
            <span>Delete</span>
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>

    export default {
        name: "cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            subItem(){
                this.$emit('subtraction')
            },
            addItem(){
                this.$emit('add')
            },
            deleteFromCart(){
                this.$emit('deleteFormCart')
            }
        },
    }
</script>

<style scoped lang="scss">
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 40px;
        margin-bottom: 20px;
        img {
            width: 80px;
        }
        &__btn {
            .fa{
                display: none;
            }
        }
    }
    .cart-item__amount {
        display: flex;
        align-items: center;
    }
    .cart-item__control {
        width: 25px;
        height: 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
        padding: 0;
    }

    .cart-item__info{
        p {
            i {
                margin-right: 10px;
            }
        }
    }


    @media only screen and (max-width: 767px) {
        .cart-item {
            flex-wrap: wrap;
            position: relative;
            &__img{
                width: 50%;
             }
            &__info {
                width: 50%;
            }
            &__btn {
                position: absolute;
                top: 20px;
                right: 20px;
                span {
                    display: none;
                }
                .fa {
                    display: inline-block;
                }
            }
            &__amount{
                width: 50%;
                margin-left: auto;
            }
        }
    }

    @media only screen and (max-width: 479px) {
        .cart-item__img {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
        .cart-item__info {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
        .cart-item__amount {
            margin-left: 0;
            width: 100%;
        }
        .cart-item__amount-inner{
            margin: 0 auto;
        }
    }
</style>
