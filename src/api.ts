import axios, { AxiosResponse } from "axios"
import MockAdapter from "axios-mock-adapter"
import { Product, Review } from "@/./types"
import { store } from "./store"

// API Auth Header

function authHeader(token: string): any {
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    }
  }

  return {}
}

// Create API Instance

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  // withCredentials: true,
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  //   ...authHeader(store.getters["auth/token"]),
  // },
})

// Setup Interceptors

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log(config)
    return config
  },
  (error) => {
    // Do something with request error
    console.error(error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // If API says user is logged-out, store.dispatch("auth/logout")
    console.error(error)
    return Promise.reject(error)
  }
)

const useMockApi = false // process.env.NODE_ENV !== "production"

if (useMockApi) {
  console.log("**USING MOCK API**")

  // Mock API
  // Section not needed with real API
  const mock = new MockAdapter(api, { delayResponse: 2000, onNoMatch: "throwException" })

  // All Products

  mock.onGet(`${process.env.VUE_APP_API_URL}products`).reply(function (config) {
    console.log("Mock API: onGet products")
    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved products",
        status: "products_index_success",
        data: {
          items: [
            {
              id: 1,
              name: "test_name",
              description: "test_description",
              price: 100,
              is_disabled: false,
              created_at: "2021-05-02 12:00:00",
              updated_at: "2021-05-02 12:00:00",
            },
            {
              id: 2,
              name: "パイナップル",
              description: "宮崎産の美味しいパイナップル",
              price: 100,
              is_disabled: false,
              created_at: "2021-05-02 12:00:00",
              updated_at: "2021-05-02 12:00:00",
            },
          ],
          meta: {
            prevPage: 0,
            currentPage: 1,
            nextPage: 0,
            currentItemsTotal: 1,
            itemsTotal: 1,
            pagesTotal: 1,
            perPage: 10,
            from: 1,
            to: 1,
            orderBy: "created_at",
            orderDirection: "desc",
          },
        },
      },
    ]
  })

  mock.onPost(`${process.env.VUE_APP_API_URL}products`).reply(function (config) {
    console.log("Mock API: onGet products")
    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved products",
        status: "products_index_success",
        data: {
          items: {
            id: 1,
            name: "test_name",
            description: "test_description",
            price: 100,
            is_disabled: false,
            created_at: "2021-05-02 12:00:00",
            updated_at: "2021-05-02 12:00:00",
          },
        },
      },
    ]
  })

  mock.onGet(`${process.env.VUE_APP_API_URL}reviews`).reply(function (config) {
    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved Item Reviews",
        status: "item_reviews_index_success",
        data: {
          items: [
            {
              id: 1,
              item_id: config.url,
              name: "Review One",
              content: "Review Desc",
              star: 3,
              created_at: "2021-05-02 12:00:00",
              updated_at: "2021-05-02 12:00:00",
            },
          ],
        },
      },
    ]
  })

  mock
    .onGet(new RegExp(`${process.env.VUE_APP_API_URL}products/d+/reviews`), {
      params: {
        page: 1,
        perPage: 10,
        orderBy: "created_at",
        orderDirection: "desc",
      },
    })
    .reply(function (config) {
      return [
        200,
        {
          code: 200,
          message: "Successfully retrieved Item Reviews",
          status: "item_reviews_index_success",
          data: {
            items: [
              {
                id: 1,
                item_id: config.url,
                name: "Review One",
                content: "Review Desc",
                star: 3,
                created_at: null,
                updated_at: null,
              },
            ],
            meta: {
              prevPage: 0,
              currentPage: 1,
              nextPage: 0,
              currentItemsTotal: 1,
              itemsTotal: 1,
              pagesTotal: 1,
              perPage: 10,
              from: 1,
              to: 1,
              orderBy: "created_at",
              orderDirection: "desc",
            },
          },
        },
      ]
    })

  mock.onGet(new RegExp(`${process.env.VUE_APP_API_URL}products/[0-9]+`)).reply(function (config) {
    console.debug("API Mock: onGet products/:id", config.url)

    const id = config.url ? parseInt(config.url.split("/")[3]) : 1

    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved Item",
        status: "item_show_success",
        data: {
          id: id,
          name: "test_name",
          description: "test_description",
          price: 100,
          is_disabled: false,
          created_at: "2021-05-02 12:00:00",
          updated_at: "2021-05-02 12:00:00",
        },
      },
    ]
  })
}

// Axios Requests

// All products
export function getApiProducts(
  params: Record<string, unknown> | null = null
): Promise<AxiosResponse<{ data: { items: Product[]; meta: Record<any, any> } }>> {
  console.log("API get products: ", `${process.env.VUE_APP_API_URL}products`)
  return api.get(`products`, {
    params: {
      page: params ? params.page : 1,
      per_page: params ? params.per_page : 10,
      order_by: params ? params.order_by : "created_at",
      order_direction: params ? params.order_direction : "desc",
    },
  })
}

// Get product
export function getApiProduct(id: number): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: getProduct ", id)

  return api.get(`products/${id}`)
}

// Delete product
export function deleteApiProduct(id: number): Promise<AxiosResponse<null>> {
  console.debug("API: deleteProduct ", id)

  return api.delete(`products/${id}`)
}

// Create product
export function createApiProduct(
  product: Record<string, unknown>
): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: createProduct")

  return api.post(`products`, product)
}

// Update product
export function updateApiProduct(
  id: number,
  product: Record<string, unknown>
): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: updateProduct", id)

  return api.put(`products/${id}`, product)
}

// Get product Reviews
export function getApiProductReviews(
  id: number,
  params: Record<string, unknown> | null = null
): Promise<AxiosResponse<{ data: { items: Review[]; meta: Record<any, any> } }>> {
  console.debug("API: getProductReviews", id)

  return api.get(`products/${id}/reviews`, {
    params: {
      page: params ? params.page : 1,
      per_page: params ? params.per_page : 10,
      order_by: params ? params.order_by : "created_at",
      order_direction: params ? params.order_direction : "desc",
    },
  })
}

// Get Reviews
export function getApiReviews(
  params: Record<string, unknown> | null = null
): Promise<AxiosResponse<{ data: { items: Review[]; meta: Record<any, any> } }>> {
  console.debug("API: getReviews")

  return api.get(`reviews`, {
    params: {
      page: params ? params.page : 1,
      per_page: params ? params.per_page : 10,
      order_by: params ? params.order_by : "created_at",
      order_direction: params ? params.order_direction : "desc",
    },
  })
}

export default api
