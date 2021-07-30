<template>
    <div>
        <div class="slider tab-slider mb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tab-slider-wrapper">
                            <nav>
                                <div class="nav nav-tabs">
                                    <a class="nav-item nav-link">More Products</a>
                                </div>
                            </nav>
                        </div>
                        <div class="row">
                            <div v-for="(product, index) in products" :key="index" class="col-lg-3">
                                <singleItem :product="product" />
                            </div>
                            <infiniteLoop @distance="1" @infinite="getAllProducts"></infiniteLoop>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import singleItem from '@/components/product/singleItem'
import infiniteLoop from 'vue-infinite-loading'

export default {
    components: { 
        singleItem,
        infiniteLoop
    },
    data () {
        return {
            products: [],
            page: 1
        }
    },
    created () {
        this.getAllProducts()
    },
    methods: {
        getAllProducts($state) {
            let vm = this;

            this.$axios.$get('api/all-products?page=' + this.page)
            .then(response => {
                return response
            })
            .then(res => {
                if (res.data.data) {
                    $.each(res.data.data, function(key, value) {
                        vm.products.push(value);
                    });
                    $state.loaded();
                }
            });
            
            this.page = this.page + 1;
        }
    }
}
</script>
