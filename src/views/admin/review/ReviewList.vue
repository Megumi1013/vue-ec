<template>
  <section class="md:w-full sm:w-11/12 px-10 py-7 text-left">
    <div>
      <h1 class="text-xl">レビュー</h1>
    </div>
    <div>
      <div v-if="reviews">
        <div v-if="loading">...Loading</div>
        <div v-else>
          <table class="w-full my-3">
            <thead>
              <tr class="border-gray-200">
                <th class="p-2">レビューID</th>
                <th class="p-2">登録者</th>
                <th class="p-2">レビュー内容</th>
                <th class="p-2">星の数</th>
                <th class="p-2">作成日</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(review, productIndex) in reviews" :key="productIndex">
                <td class="p-2">{{ review.id }}</td>
                <td class="p-2">
                  {{ review.name }}
                </td>
                <td class="p-2">{{ review.content }}</td>
                <td class="p-2">{{ review.star }}</td>
                <td class="p-2">{{ review.created_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else-if="!reviews" class="alert-light">レビューが登録されていません。</div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import { reviewsState, getAndSetReviews } from "@/composables/useReviews"

export default defineComponent({
  name: "ReviewList",
  components: {},
  props: {},
  setup: function () {
    onMounted(() => {
      getAndSetReviews()
    })

    return {
      reviews: computed(() => reviewsState.reviews),
      loading: computed(() => reviewsState.loading),
    }
  },
})
</script>
<style scoped>
body {
  background: #d5eef2;
}
.item-img {
  width: 250px;
  height: 250px;
}
</style>
