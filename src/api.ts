import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";

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
            isDisabled: null,
            blah: "foo",
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
    });

  mock
    .onGet(`${process.env.VUE_APP_API_URL}item/reviews`, {
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
            isDisabled: null,
            blah: "foo",
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
    });
}

// Axios Requests

// All Items
// : Promise<AxiosResponse<any>>
export function getItems(): Promise<AxiosResponse<unknown>> {
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

// All reviews

export function getReviews(): Promise<AxiosResponse<unknown>> {
  return axios.get(`${process.env.VUE_APP_API_URL}item/reviews`, {
    withCredentials: true,
    params: {
      page: 1,
      perPage: 10,
      orderBy: "created_at",
      orderDirection: "desc",
    },
  });
}
