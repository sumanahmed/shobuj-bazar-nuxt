<template>
  <div>
    <div class="hero-slider-with-category-container mt-20 mb-35">
      <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3">
                <sidebar />
            </div>
            <div class="col-lg-9 col-md-9">
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
import sidebar from '@/components/inc/sidebar'
import singleItem from '@/components/product/singleItem'
export default {
    data () {
        return {
            products: [],
            message: ''
        }
    },
    components: {
        sidebar,
        singleItem
    },
    created () {
        this.getProducts()
    },
    computed: {
        loading () {
            return this.$store.state.loading
        }
    },
    watch: {
        '$route.query.id': function (newVal, oldVal) {
            if(newVal != oldVal) {
                this.getProducts(newVal)
            }
        }
    },
    methods: {
        async getProducts () {
            this.$store.dispatch('loadingState', true)
            const param = { type: this.$route.query.type, id: this.$route.query.id}
            const result = await this.$axios.$get('api/category-products', { params: param })
            if (result.success) {
                this.products = result.data
            } else {
                this.products = []
                this.message = result.message
            }
            this.$store.dispatch('loadingState', false)
        }
    }
}
</script>
