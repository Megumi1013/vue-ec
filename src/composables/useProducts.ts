import { getItems, getItem, getItemReviews, createItem, updateItem, deleteItem } from "@/api"
import { Product, Review } from "@/types"
import { reactive } from "vue"

interface ProductState {
  products: Product[]
  product: Product | null
  productReviews: Review[]
  loading: boolean
}

const productState = reactive<ProductState>({
  products: [],
  product: null,
  productReviews: [],
  loading: false,
})

const getAndSetProducts = async (): Promise<void> => {
  try {
    productState.loading = true
    const response = await getItems()
    console.log(response)
    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productState.loading = false
    productState.products = response.data.data.items
  } catch (error) {
    productState.loading = false
    throw Error(error)
  }
}

const getAndSetProduct = async (id: number): Promise<void> => {
  try {
    productState.loading = true
    const response = await getItem(id)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productState.loading = false
    productState.product = response.data.data
  } catch (error) {
    productState.loading = false
    throw Error(error)
  }
}

const deleteProduct = async (id: number): Promise<void> => {
  try {
    productState.loading = true
    const response = await deleteItem(id)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productState.loading = false
    alert("削除が完了しました。")
  } catch (error) {
    productState.loading = false
    throw Error(error)
  }
}

const createProduct = async (product: Product): Promise<void> => {
  try {
    productState.loading = true
    const response = await createItem(product)

    if (response.status !== 200) {
      throw Error("エラーが発生しました。")
    }

    productState.loading = false
    productState.product = response.data.data
  } catch (error) {
    productState.loading = false
    throw Error(error)
  }
}

export { productState, getAndSetProducts, getAndSetProduct, deleteProduct, createProduct }
