import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore'
import { http } from '../../util/config'
import { ViTriViewModel } from '../../models/ViTriModel'


export type PositionState = {
  allPosition: ViTriViewModel[],
  posPagination: ViTriViewModel[]
}

const initialState: PositionState = {
  allPosition: [],
  posPagination: []
}

const positionReducer = createSlice({
  name: 'positionReducer',
  initialState,
  reducers: {
    getAllPositionAction: (state: PositionState, action: PayloadAction<ViTriViewModel[]>) => {
      state.allPosition = action.payload
    },
    getPosPaginationAction: (state: PositionState, action: PayloadAction<ViTriViewModel[]>) => {
      state.posPagination = action.payload
    },
  },
})

export const { getAllPositionAction, getPosPaginationAction } = positionReducer.actions;
export default positionReducer.reducer



export const getAllPosition = () => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/vi-tri`);
      dispatch(getAllPositionAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
}
export const getPosiTionPaginate = (pageIndex: number, pageSize: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`);
      dispatch(getPosPaginationAction(result.data.content.data));
    } catch (error) {
      console.log(error);
    }
  }
}
