<template>
  <p>この商品のレビュー</p>
  <div v-if="reviews.length > 0">
    <table class="w-full my-3">
      <thead>
        <tr class="border-gray-200">
          <th class="p-2">星の数</th>
          <th class="p-2">内容</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(review, reviewIndex) in reviews" :key="reviewIndex">
          <td class="p-2">
            {{ review.stars }}
          </td>
          <td class="p-2">{{ review.content }}</td>
          <td class="p-2">{{ review.created_at }}</td>
          <td class="p-2">
            <dashboard-button class="mr-3">削除</dashboard-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="alert-light">レビューが登録されていません。</div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue"
import { Review } from "@/types"
import { useStore } from "vuex"

export default defineComponent({
  name: "adminReviews",

  components: {},

  props: {
    itemId: {
      type: Number,
      required: false,
    },
  },

  setup: function (props, { emit }) {
    const store = useStore()

    const getAndSetItemReviews = async () => {
      await store.dispatch("produce/getAndSetItemReviews")
    }

    const getAndSetReviews = async () => {
      await store.dispatch("reviews/getAndSetReviews")
    }

    onMounted(() => {
      if (props.itemId) {
        getAndSetItemReviews()
      } else {
        getAndSetReviews()
      }
    })

    return {
      loading: computed(() => store.getters["produce/loading"] || store.getters["reviews/loading"]),
      reviews: computed(() =>
        props.itemId ? store.getters["produce/reviews"] : store.getters["reviews/items"]
      ),
    }
  },
})
</script>
<style scoped></style>
