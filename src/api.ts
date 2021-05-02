import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { Params, Produce, Review, State } from "@/store/modules/produce";
import { ActionContext } from "vuex";

if (process.env.NODE_ENV !== "production") {
  console.log("**USING MOCK API**");

  // Mock API
  // Section not needed with real API
  const mock = new MockAdapter(axios, { delayResponse: 2000 });

  // All Items

  mock
    .onGet(`${process.env.VUE_APP_API_URL}items`, {
      params: {
        page: 1,
        perPage: 10,
        orderBy: "created_at",
        orderDirection: "desc",
      },
    })
    .reply(200, {
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
            isDisabled: false,
            created_at: "2021-05-02 12:00:00",
            updated_at: "2021-05-02 12:00:00",
          },
          {
            id: 2,
            name: "パイナップル",
            description: "宮崎産の美味しいパイナップル",
            price: 100,
            isDisabled: false,
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
    });

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
      ];
    });

  mock
    .onGet(new RegExp(`${process.env.VUE_APP_API_URL}items/d+`))
    .reply(function (config) {
      return [
        200,
        {
          code: 200,
          message: "Successfully retrieved Item",
          status: "item_show_success",
          data: {
            id: config.url,
            name: "test_name",
            description: "test_description",
            price: 100,
            is_disabled: false,
            created_at: "2021-05-02 12:00:00",
            updated_at: "2021-05-02 12:00:00",
          },
        },
      ];
    });
}

// Axios Requests

// All Items
// : Promise<AxiosResponse<any>>
export function getItems(): Promise<AxiosResponse<{ items: Produce[] }>> {
  return axios.get(`${process.env.VUE_APP_API_URL}items`, {
    withCredentials: true,
    params: {
      page: 1,
      perPage: 10,
      orderBy: "created_at",
      orderDirection: "desc",
    },
  });
}

export function getItem(id: any): Promise<AxiosResponse<{ item: Produce[] }>> {
  return axios.get(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
  });
}

export function deleteItem(id: any): Promise<AxiosResponse<{ any: any }>> {
  return axios.delete(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
  });
}

export function createItem(
  item: Record<string, unknown>
): Promise<AxiosResponse<{ item: Produce[] }>> {
  return axios.put(`${process.env.VUE_APP_API_URL}items`, {
    withCredentials: true,
    body: item,
  });
}

export function updateItem(
  id: number,
  item: Record<string, unknown>
): Promise<AxiosResponse<{ item: Produce[] }>> {
  return axios.put(`${process.env.VUE_APP_API_URL}items/${id}`, {
    withCredentials: true,
    body: item,
  });
}

// All reviews

export function getReviews(): Promise<AxiosResponse<{ reviews: Review[] }>> {
  return axios.get(`${process.env.VUE_APP_API_URL}/reviews`, {
    withCredentials: true,
    params: {
      type: "item",
      page: 1,
      perPage: 10,
      orderBy: "created_at",
      orderDirection: "desc",
    },
  });
}
