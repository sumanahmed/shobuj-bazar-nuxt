<template>
    <div>
        <div class="slider tab-slider mb-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tab-slider-wrapper">
                            <nav>
                                <div class="nav nav-tabs">
                                    <a class="nav-item nav-link">Special Offer</a>
                                </div>
                            </nav>
                        </div>
                        <div class="spinner-border text-success loader" role="status" v-if="loading"></div>
                        <slot v-else>
                            <div class="row">
                                <div v-for="(product, index) in products" :key="index" class="col-lg-3">
                                    <singleItem :product="product" />
                                </div>  
                            </div>  
                        </slot> 
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
    computed: {
        loading () {
            return this.$store.state.loading
        }
    },
    created () {
        this.getSpecialOfferProducts()
    },
    methods: {
        async getSpecialOfferProducts () {
            this.$store.dispatch('loadingState', true)
            const result = await this.$axios.$get('api/special-offer')
            if (result.success) {
                this.products = result.data
            } else {
                this.products = []
            }
            this.$store.dispatch('loadingState', false)
        }
    }
}
</script>