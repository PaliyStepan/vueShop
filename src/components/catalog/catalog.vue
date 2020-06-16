<template>
    <div class="catalog">
        <h2 class="sec__title">Catalog</h2>
        <router-link :to="{name: 'Cart', params:{cart_data: CART}}" class="catalog__cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>{{CART.length}}</span>
        </router-link>
        <div class="filters">
            <Select
                :selected="selected"
                :options="categories"
                @select="sortByCategories"
            >
            </Select>
            <div class="range-slider">
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    v-model.number="minPrice"
                    @change="setRangeSliders"
                >
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    v-model.number="maxPrice"
                    @change="setRangeSliders"
                >
            </div>
        </div>
        <div class="range-values">
            <p>Min: {{minPrice}}</p>
            <p>Max: {{maxPrice}}</p>
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
</template>

<script>
    import catalogItem from './catalog-item';
    import {mapActions, mapGetters} from 'vuex';
    import Select from '../utils/select';

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
                maxPrice: 1000
            }
        },
        computed: {
          ...mapGetters([
              'PRODUCTS',
              'CART'
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
            Select
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS',
                'ADD_TO_CART'
            ]),
            addToCart(data){
                this.ADD_TO_CART(data)
            },
            // sortByCategories(category){
            sortByCategories(category){
                // this.sortedProducts = [];
                // let vm = this;
                // this.PRODUCTS.map(function (item) {
                //     if (item.category === category.name){
                //         vm.sortedProducts.push(item)
                //     }
                // });
                // this.selected = category.name

            },
            setRangeSliders(){
                if (this.minPrice > this.maxPrice){
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
            }
        },
        mounted() {
            this.GET_PRODUCTS()
                .then((response) =>{
                    if (response.data) {
                        console.log('Data get')
                    }
                })
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
        justify-content: space-between;
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

    .range-slider {
        width: 200px;
        margin: 0 16px;
        text-align: center;
        position: relative;
    }
    .range-slider svg, .range-slider  input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    input[type=range]::-webkit-slider-thumb{
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }


</style>
