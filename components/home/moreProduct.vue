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
                        <singleItem :products="products" /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import singleItem from '@/components/product/singleItem'

export default {
    components: { singleItem },
    data () {
        return {
            products: []
        }
    },
    created () {
        this.getSpecialOfferProducts()
    },
    methods: {
        async getSpecialOfferProducts () {
            const result = await this.$axios.$get('api/all-products')
            if (result.success) {
                this.products = result.data
            }
        }
    }
}
</script>
