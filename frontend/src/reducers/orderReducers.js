import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        success: true,
        order: payload,
        loading: false,
      };
    case ORDER_CREATE_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        order: payload,
        loading: false,
      };
    case ORDER_DETAILS_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  const { payload, type } = action;

  switch (type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_PAY_FAIL:
      return {
        error: payload,
        loading: false,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  const { payload, type } = action;

  switch (type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_LIST_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
