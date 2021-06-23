<template>
  <div>
    <div class="hero-slider-with-category-container mt-20 mb-35">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <sidebar />
          </div>
          <div class="col-lg-9 col-md-9">
            <ad />
          </div>
        </div>
      </div>
    </div>
    <policy />
    <topCategory />
    <specialOffer />
    <moreProduct />
  </div>
</template>

<script>
import sidebar from '@/components/inc/sidebar'
import ad from '@/components/home/ad'
import policy from '@/components/home/policy'
import topCategory from '@/components/home/topCategory'
import specialOffer from '@/components/home/specialOffer'
import moreProduct from '@/components/home/moreProduct'
export default {
  components: {
    sidebar,
    ad,
    policy,
    topCategory,
    specialOffer,
    moreProduct
  }
}
</script>

<style>
</style>
