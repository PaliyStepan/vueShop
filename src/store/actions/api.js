import axios from "axios";

export default {
    GET_PRODUCTS({commit}){
        // return axios('http://localhost:3000/products',{
        //     method: "GET"
        // })
        //     .then((products) => {
        //         commit('SET_PRODUCTS_TO_STATE', products.data);
        //         return products;
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //         return error
        //     })
        //
        commit('IS_LOADING_TOGGLE');

        return axios('https://vueshop-b7269.firebaseio.com/products.json',{
            method: "GET"
        })
            .then((products) =>{
                const resultArray = [];

                for (let key in products.data) {
                    resultArray.push(products.data[key])
                }

                commit('SET_PRODUCTS_TO_STATE', resultArray);
                commit('IS_LOADING_TOGGLE');
            })

    }
}
