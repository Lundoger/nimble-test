import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

const rootReducer = combineReducers({})

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export const initStore = () => {
  return rootStore
}

export type AppStore = ReturnType<typeof initStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

setupListeners(rootStore.dispatch)
