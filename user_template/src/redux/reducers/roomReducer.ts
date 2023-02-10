import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore'
import { http } from '../../util/config'
import { ViTriViewModel } from '../../models/ViTriModel'
import { PhongViewModel } from '../../models/PhongViewModel'


export type RoomState = {
  roomPaginate: PhongViewModel[],
  roomById: PhongViewModel[]
}

const initialState: RoomState = {
  roomPaginate: [],
  roomById: []
}

const positionReducer = createSlice({
  name: 'positionReducer',
  initialState,
  reducers: {
    getRoomPaginateAction: (state: RoomState, action: PayloadAction<PhongViewModel[]>) => {
      state.roomPaginate = action.payload
    },
    getRoomByIdAction: (state: RoomState, action: PayloadAction<PhongViewModel[]>) => {
      state.roomById = action.payload
    },
  },
})

export const { getRoomPaginateAction, getRoomByIdAction } = positionReducer.actions;
export default positionReducer.reducer


export const getRoomPaginate = (pageIndex: number, pageSize: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`);
      dispatch(getRoomPaginateAction(result.data.content.data))
      console.log(result.data.content.data)
    }
    catch (err) {
      console.log(err);
    }
  }
}
export const getRoomById = (maViTri: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`);
      dispatch(getRoomByIdAction(result.data.content))
      console.log(result.data.content)
    }
    catch (err) {
      console.log(err);
    }
  }
}
