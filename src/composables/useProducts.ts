import {
  getApiProducts,
  getApiProduct,
  getApiProductReviews,
  createApiProduct,
  updateApiProduct,
  deleteApiProduct,
} from "@/api"
import { Product, Review } from "@/types"
import { reactive } from "vue"

interface productsState {
  products: Product[]
  product: Product | null
  productReviews: Review[]
  loading: boolean
}

const productsState = reactive<productsState>({
  products: [],
  product: null,
  productReviews: [],
  loading: false,
})

const resetState = (): void => {
  productsState.products = []
  productsState.product = null
  productsState.productReviews = []
  productsState.loading = false
}

const newProduct = (): void => {
  productsState.product = {
    name: "",
    description: "",
    price: 0,
    is_disabled: false,
    created_at: "2021-05-01 09:00:00",
    updated_at: "2021-05-01 09:00:00",
  }
}

const getAndSetProducts = async (): Promise<void> => {
  try {
    productsState.loading = true
    const response = await getApiProducts()
    console.log(response)
    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    productsState.products = response.data.data.items
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

const getAndSetProduct = async (id: number): Promise<void> => {
  try {
    productsState.loading = true
    const response = await getApiProduct(id)
    console.log(response)
    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    productsState.product = response.data.data
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

const deleteProduct = async (id: number): Promise<void> => {
  try {
    productsState.loading = true
    const response = await deleteApiProduct(id)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    alert("削除が完了しました。")
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

const createProduct = async (product: Product): Promise<void> => {
  try {
    productsState.loading = true
    const response = await createApiProduct(product)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    productsState.product = response.data.data
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

const updateProduct = async (id: number, product: Product): Promise<void> => {
  try {
    productsState.loading = true
    const response = await updateApiProduct(id, product)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    productsState.product = response.data.data
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

const getAndSetProductReviews = async (
  id: number,
  params: Record<string, unknown> | null = null
): Promise<void> => {
  try {
    productsState.loading = true
    const response = await getApiProductReviews(id, params)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productsState.loading = false
    productsState.productReviews = response.data.data.items
  } catch (error) {
    productsState.loading = false
    throw Error(error)
  }
}

export {
  productsState,
  resetState,
  newProduct,
  getAndSetProducts,
  getAndSetProduct,
  getAndSetProductReviews,
  deleteProduct,
  createProduct,
  updateProduct,
}
