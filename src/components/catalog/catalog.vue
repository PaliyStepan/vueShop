<template>
    <div class="catalog">
        <Notification
            :messages="messages"
            :timeout="3500"
        />
        <h2 class="sec__title">Catalog</h2>
        <router-link :to="{name: 'Cart', params:{cart_data: CART}}" class="catalog__cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>{{CART.length}}</span>
        </router-link>
        <Loader v-if="LOADING" />
        <div v-else class="catalog__inner">
            <div class="filters">
                <Select
                    :selected="selected"
                    :options="categories"
                    @select="sortByCategories"
                >
                </Select>
            </div>
            <div class="catalog-list">
                <catalogItem
                    v-for="product in filterProducts"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import catalogItem from './catalog-item';
    import {mapActions, mapGetters} from 'vuex';
    import Select from '../utils/select';
    import Notification from '../utils/notification'
    import Loader from "../Loader";

    export default {
        name: "catalog",
        data() {
            return {
                categories: [
                    {name: 'Все', value: 'все'},
                    {name: 'Мужские', value: 'м'},
                    {name: 'Женские', value: 'ж'},
                ],
                selected: 'Все',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 1000,
                messages: []
            }
        },
        computed: {
          ...mapGetters([
              'PRODUCTS',
              'CART',
              'LOADING'
          ]),
            filterProducts(){
              if (this.sortedProducts.length){
                  return this.sortedProducts
              } else {
                  return  this.PRODUCTS
              }
            }
        },
        components: {
            catalogItem,
            Select,
            Notification,
            Loader
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS',
                'ADD_TO_CART'
            ]),
            addToCart(data){
                this.ADD_TO_CART(data)
                    .then(()=>{
                        let timeStamp = Date.now().toLocaleString();
                        this.messages.unshift(
                            {
                                name:'Товар добавлен в корзину', id: timeStamp
                            }
                        )
                    })
            },
            sortByCategories(category){
                this.sortedProducts = [];
                let vm = this;
                this.PRODUCTS.map(function (item) {
                    if (item.category === category.name){
                        vm.sortedProducts.push(item)
                    }
                });
                this.selected = category.name
            },
        },
        mounted() {
            this.GET_PRODUCTS()
        }
    }
</script>

<style lang="scss">
    .catalog{
        padding: 0 15px;
    }
    .catalog-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        width: auto;
    }
    .catalog__cart {
        border: 1px solid #fff;
        display: flex;
        width: 45px;
        height: 45px;
        position: fixed;
        top: 20%;
        right: 0%;
        background-color: $green;
        color: #fff;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 3;
        .fa {
            font-size: 20px;
        }
        span {
            width: 15px;
            height: 15px;
            background-color: $dark;

            position: absolute;
            top: 3px;
            right: 3px;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
        &:hover {
            background-color: $dark;
            span {
                background-color: $green;
            }
        }
    }

    .filters {
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 767px){
        .catalog-list {
            margin: 0 -8px;
        }
    }


</style>
