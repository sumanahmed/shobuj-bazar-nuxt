<template>
    <div class="row">
        <div class="gf-product tab-slider-sub-product category-item">
            <div class="image">
                <a href="#!">
                    <span class="onsale">{{ product.quantity >= 1 ? 'Sale!' : 'Stock Out' }}</span>
                    <img src="" class="img-fluid" alt="">
                    <img :src="`${$axios.defaults.baseURL}` + product.thumbnail" class="img-fluid" alt="">
                </a>
                <div class="product-hover-icons">
                    <a v-if="product.quantity >= 1" class="active addtocart" href="#!" :id="product.id" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                    <a href="#!" data-tooltip="Quick view" data-toggle="modal" class="quickView" data-target="#quickViewModalContainer"> <span class="icon_search"></span> </a>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title"><a href="#!">{{ product.en_name }}</a></h3>
                <div class="price-box">
                    <slot v-if="product.discount_id !== null">
                        <span class="main-price">{{ product.sale_price }}</span>
                        <span class="discounted-price">{{ product.discount_price | numberFormat }}</span>
                    </slot>
                    <slot v-else>
                        <span class="discounted-price">{{ product.sale_price }}</span>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'singleItem',
        props: ['product'],
        data () {
            return {}
        }
    }
</script>