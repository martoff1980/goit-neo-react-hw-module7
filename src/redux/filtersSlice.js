import { createSlice, createSelector } from '@reduxjs/toolkit';
// import { selectContacts } from './contactsSlice';
// import { selectFilteredContacts } from './contactsSlice';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Є експорт екшенів
export const { changeFilter } = filtersSlice.actions;
// Є експорт редюсера
const filtersSliceReducer = filtersSlice.reducer;
export default filtersSliceReducer;

// оголоси функції-селектори для використання в useSelector:
export const selectNameFilter = state => state.filters.name;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, nameFilter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//     )
// );
