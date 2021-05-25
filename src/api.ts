import axios, { AxiosResponse } from "axios"
import MockAdapter from "axios-mock-adapter"
import { Product, Review } from "@/./types"

if (process.env.NODE_ENV !== "production") {
  console.log("**USING MOCK API**")

  // Mock API
  // Section not needed with real API
  const mock = new MockAdapter(axios, { delayResponse: 2000, onNoMatch: "throwException" })

  // All Products

  mock.onGet(`${process.env.VUE_APP_API_URL}items`).reply(function (config) {
    console.log("Mock API: onGet items")
    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved Items",
        status: "items_index_success",
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

  mock.onPost(`${process.env.VUE_APP_API_URL}items`).reply(function (config) {
    console.log("Mock API: onGet items")
    return [
      200,
      {
        code: 200,
        message: "Successfully retrieved Items",
        status: "items_index_success",
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
    .onGet(new RegExp(`${process.env.VUE_APP_API_URL}items/d+/reviews`), {
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

  mock.onGet(new RegExp(`${process.env.VUE_APP_API_URL}items/[0-9]+`)).reply(function (config) {
    console.debug("API Mock: onGet items/:id", config.url)

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

// All Items
export function getApiProducts(
  params: Record<string, unknown> | null = null
): Promise<AxiosResponse<{ data: { items: Product[]; meta: Record<any, any> } }>> {
  console.log("API getItems: " + `${process.env.VUE_APP_API_URL}items`)
  return axios.get(`${process.env.VUE_APP_API_URL}items`, {
    withCredentials: true,
    params: {
      page: params ? params.page : 1,
      per_page: params ? params.per_page : 10,
      order_by: params ? params.order_by : "created_at",
      order_direction: params ? params.order_direction : "desc",
    },
  })
}

// Get Item
export function getApiProduct(id: number): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: getItem ", id)

  return axios.get(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
  })
}

// Delete Item
export function deleteApiProduct(id: number): Promise<AxiosResponse<null>> {
  console.debug("API: deleteItem ", id)

  return axios.delete(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
  })
}

// Create Item
export function createApiProduct(
  item: Record<string, unknown>
): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: createItem")

  return axios.put(`${process.env.VUE_APP_API_URL}items`, {
    withCredentials: true,
    body: item,
  })
}

// Update Item
export function updateApiProduct(
  id: number,
  item: Record<string, unknown>
): Promise<AxiosResponse<{ data: Product }>> {
  console.debug("API: updateItem", id)

  return axios.put(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
    body: item,
  })
}

// Get Item Reviews
export function getApiProductReviews(
  id: number,
  params: Record<string, unknown> | null = null
): Promise<AxiosResponse<{ data: { items: Review[]; meta: Record<any, any> } }>> {
  console.debug("API: getItemReviews", id)

  return axios.get(`${process.env.VUE_APP_API_URL}items/${id}/reviews`, {
    withCredentials: true,
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

  return axios.get(`${process.env.VUE_APP_API_URL}reviews`, {
    withCredentials: true,
    params: {
      page: params ? params.page : 1,
      per_page: params ? params.per_page : 10,
      order_by: params ? params.order_by : "created_at",
      order_direction: params ? params.order_direction : "desc",
    },
  })
}
