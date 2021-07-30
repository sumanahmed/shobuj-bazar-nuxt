<template>
    <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col-lg-3">
            <div class="gf-product tab-slider-sub-product category-item">
                <div class="image">
                    <a href="#!">
                        <span class="onsale">{{ product.quantity >= 1 ? 'Sale!' : 'Stock Out' }}</span>
                        <img src="" class="img-fluid" alt="">
                        <img :src="`${$axios.defaults.baseURL}` + product.thumbnail" class="img-fluid" alt="">
                    </a>
                    <div class="product-hover-icons">
                        <a v-if="product.quantity >= 1" class="active addtocart" href="#!" :id="product.id" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                        <a href="#!" data-tooltip="Quick view" data-toggle="modal" class="quickView" data-target="#quickViewModalContainer" data-id="271" data-quantity="50"
                            data-en_name="Walton Desktop RAM DDR4 2400 4GB Model WDR4L0424NN1" data-bn_name="ওয়ালটন ডেস্কটপ র‌্যাম ডি ডি আর ৪ ২৪০০ জিবি মডেলঃ WDR4L0424NN1" data-en_description="Product details of Walton Desktop RAM DDR4 2400 4GB Model WDR4L0424NN1Model number :  WDR4L0424NN1Type :      DesktopModule specification :  DDR4 288 Pin Unbuffered DIMM Non ECCProduct Dimension ：  133.4 x 31.3 mmCapacity :   4GBCAS Latency :   16-16-16-39DRAM Density :   512x8Data Transfer Bandwidth :   2400 Mhz PC4 19200 (19,200 MB/Sec)Working Voltage :      1.2V" data-bn_description="Product details of Walton Desktop RAM DDR4 2400 4GB Model WDR4L0424NN1Model number :  WDR4L0424NN1Type :      DesktopModule specification :  DDR4 288 Pin Unbuffered DIMM Non ECCProduct Dimension ：  133.4 x 31.3 mmCapacity :   4GBCAS Latency :   16-16-16-39DRAM Density :   512x8Data Transfer Bandwidth :   2400 Mhz PC4 19200 (19,200 MB/Sec)Working Voltage :      1.2V" data-thumbnail="shobuj_bazar/backend/uploads/images/product/thumbnail/thumb1615983529.png" data-image_1=""
                            data-image_2="" data-image_3="" data-image_4=""   data-discount_price="2185"  
                            data-sale_price="2300.00" > <span class="icon_search"></span> </a>
                    </div>
                </div>
                <div class="product-content">
                    <h3 class="product-title"><a href="#!">{{ product.en_name }}</a></h3>
                    <div class="price-box">
                        <span class="main-price">2300.00</span>
                        <span class="discounted-price">2185</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'singleItem',
        props: ['products'],
        data () {
            return {}
        }
    }
</script>