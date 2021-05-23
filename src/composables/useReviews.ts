import { getApiReviews, getApiProductReviews } from "@/api"
import { Review } from "@/types"
import { reactive } from "vue"

interface reviewsState {
  reviews: Review[] | null
  loading: boolean
}

const reviewsState = reactive<reviewsState>({
  reviews: [],
  loading: false,
})

const getAndSetReviews = async (): Promise<void> => {
  try {
    reviewsState.loading = true
    const response = await getApiReviews()

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    reviewsState.loading = false
    reviewsState.reviews = response.data.data.items
  } catch (error) {
    reviewsState.loading = false
    throw Error(error)
  }
}

const getAndSetProductReviews = async (id: number): Promise<void> => {
  try {
    reviewsState.loading = true
    const response = await getApiProductReviews(id)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    reviewsState.loading = false
    reviewsState.reviews = response.data.data.items
  } catch (error) {
    reviewsState.loading = false
    throw Error(error)
  }
}

export { reviewsState, getAndSetReviews, getAndSetProductReviews }
