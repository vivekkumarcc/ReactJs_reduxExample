import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface counterState {
    value: number
}

const initialState: counterState = {
    value: 0
}

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: initialState,
        reducers: {
            increment: (state) => {
                state.value += 1
            },
            decrement: (state) => {
                state.value -= 1
            },
            multiply: (state, action: PayloadAction<number>) => {
                state.value *= action.payload
            }
        }
    }
)

export const { increment, decrement, multiply } = counterSlice.actions
export default counterSlice.reducer
// export const selectCount = (state: RootState) => state.counter.value
//to use thisconst count = useSelector(selectCount());
//first you call useSelector and pass the selectCount method, which takes only the needed data.

//will be used in store as reducer
