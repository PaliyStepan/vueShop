<template>
    <div class="cart">
        <h2 class="sec__title">Cart</h2>
        <router-link :to="{name: 'Catalog'}" class="back__catalog">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <span>Catalog</span>
        </router-link>
        <p v-if="!cart_data.length">У вас нет товаров</p>
        <cartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFormCart="deleteFormCart(index)"
            @subtraction="subtraction(index)"
            @add="add(index)"
        ></cartItem>
        <div class="cart__total">
            <p>Total:</p>
            <p>{{cartTotalCost | toLocalString}} <i class="fa fa-rub" aria-hidden="true"></i></p>
        </div>
    </div>
</template>

<script>
    import cartItem from './cart-item';
    import {mapActions} from 'vuex';

    export default {
        name: "cart",
        components: {
            cartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed:{
          cartTotalCost(){
              let result = [];

              for (let item of this.cart_data) {
                  result.push(item.price * item.quantity);
              }
              if (this.cart_data.length) {
                  result = result.reduce( function (sum,el) {
                      return sum + el
                  });

                  return  result;
              } else {
                  return 0
              }
          }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'ADD_CART_ITEM',
                'SUB_CART_ITEM'
            ]),
            subtraction(index){
                this.SUB_CART_ITEM(index)
            },
            add(index){
                this.ADD_CART_ITEM(index)
            },
            deleteFormCart(index){
                this.DELETE_FROM_CART(index)
            }
        },
        filters: {
            toLocalString(value) {
                return value.toLocaleString()
            }
        }
    }
</script>

<style lang="scss">
    .cart {
        margin-bottom: 180px;
        padding: 0 15px;
    }
    .back__catalog {
        color: $dark;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: all 0.2s;
        margin-bottom: 25px;
        span {
            margin-left: 10px;
        }
        .fa {
            margin-top: -5px;
        }
        &:hover {
            color: $green;
        }
    }

    .cart__total {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: $green;
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
    }



</style>
