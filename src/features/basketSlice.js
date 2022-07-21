import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromBasket: (state, action) => {
      // use the id that we passed and remove the item from the basket with that id
      let newBasket = [...state.items];
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        //Splice the item out of the basket
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else alert("WHOAH this item isnt in the basket");
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

//selectors
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;
export const selectBasketTotalAmount = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
