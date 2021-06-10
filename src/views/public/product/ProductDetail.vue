<template>
  <public-header></public-header>
  <div v-if="!anyLoading">
    <div v-if="product">
      <div>
        <h1 class="text-3xl text-gray-500 my-14">
          {{ product.name }}
        </h1>
      </div>

      <div class="w-9/12 mx-auto">
        <div class="px-10 py-7 text-left">
          <div class="flex justify-center">
            <div class="my-10 item-img bg-gradient-to-br bg-yellow-200 w-3/12 h-3/12"></div>
          </div>

          <div class="my-12">
            {{ product.description }}
          </div>
          <div class="my-12">{{ product.price }}円</div>

          <div class="my-12">
            個数
            <select name="quantity" id="" class="px-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div class="my-12">
            <public-button text="購入する"></public-button>
          </div>

          <div class="flex">
            <p>この商品のレビュー</p>
            <!--          <public-modal> レビューを登録 </public-modal>-->
          </div>
          <div v-if="reviews">
            <table class="w-full my-3">
              <thead>
                <tr class="border-gray-200">
                  <th class="p-2">登録者</th>
                  <th class="p-2">星の数</th>
                  <th class="p-2">内容</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(review, productIndex) in reviews" :key="productIndex">
                  <td class="p-2">
                    {{ review.name }}
                  </td>
                  <td class="p-2">
                    {{ review.stars }}
                  </td>
                  <td class="p-2">{{ review.content }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="alert-light">レビューが登録されていません。</div>

          <!--        <div class="flex items-center">-->
          <!--          <button @click="setNewItem" class="btn btn-primary">登録</button>-->
          <!--          &lt;!&ndash;            <dashboard-button @handleClick="setNewItem">登録</dashboard-button>&ndash;&gt;-->
          <!--        </div>-->
        </div>
      </div>
    </div>
    <div v-else>商品が見つかりませんでした。</div>
  </div>
  <div v-else>...Loading</div>
  <public-footer></public-footer>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, onMounted, WritableComputedRef } from "vue"
import { productsState, getAndSetProduct } from "@/composables/useProducts"
import { Product } from "@/types"
import { getAndSetProductReviews, reviewsState } from "@/composables/useReviews"
import PublicButton from "@/components/public/PublicButton.vue"
import PublicHeader from "@/components/public/PublicHeader.vue"
import PublicFooter from "@/components/public/PublicFooter.vue"

interface ComponentState {
  product: Product | null
}

export default defineComponent({
  name: "itemDetails",

  components: {
    PublicButton,
    PublicHeader,
    PublicFooter,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  setup: function (props) {
    const state = reactive<ComponentState>({
      product: null,
    })

    onMounted(() => {
      getAndSetProduct(props.id)
      getAndSetProductReviews(props.id)
      console.log("id=", props.id)
    })

    const anyLoading: WritableComputedRef<boolean> = computed(() => productsState.loading)

    return {
      state,
      anyLoading,
      product: computed(() => productsState.product),
      reviews: computed(() => reviewsState.reviews),
      reviewsLoading: computed(() => reviewsState.loading),
    }
  },
})
</script>

<style scoped></style>
