import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filters: {
    brand: [],
    viscosity: [],
    size: [],
    searchTerm: "",
  },
  sortBy: "lowToHigh",
  currentPage: 1,
  itemsPerPage: 12,
  totalItems: 0,
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.totalItems = action.payload.length;
      state.loading = false;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    applyFilters: (state, action) => {
      state.filters = action.payload;
      state.loading = true;

      state.filteredProducts = state.products.filter((product) => {
        const { brand, viscosity, size } = state.filters;
        const matchesBrand =
          brand.length === 0 || brand.includes(product.brand);
        const matchesViscosity =
          viscosity.length === 0 || viscosity.includes(product.viscosity);
        const matchesSize = size.length === 0 || size.includes(product.size);
        const matchesSearchTerm =
          product.name
            .toLowerCase()
            .includes(state.filters.searchTerm.toLowerCase()) ||
          product.brand
            .toLowerCase()
            .includes(state.filters.searchTerm.toLowerCase()) ||
          product.sku
            .toLowerCase()
            .includes(state.filters.searchTerm.toLowerCase());
        return (
          matchesBrand && matchesViscosity && matchesSize && matchesSearchTerm
        );
      });

      state.filteredProducts = applySorting(
        state.filteredProducts,
        state.sortBy
      );
      state.totalItems = state.filteredProducts.length;

      state.currentPage = 1;
      state.loading = false;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;

      state.filteredProducts = applySorting(
        state.filteredProducts,
        state.sortBy
      );
      state.totalItems = state.filteredProducts.length;

      state.currentPage = 1;
      state.loading = false;
    },

    setPage: (state, action) => {
      state.currentPage = action.payload;
      state.loading = true;

      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = state.currentPage * state.itemsPerPage;
      state.filteredProducts = state.products.slice(startIndex, endIndex);

      state.loading = false;
    },

    resetPagination: (state) => {
      state.currentPage = 1;
      state.totalItems = state.filteredProducts.length;
    },
  },
});

const applySorting = (products, sortBy) => {
  switch (sortBy) {
    case "lowToHigh":
      return products.sort((a, b) => a.price - b.price);
    case "highToLow":
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export const {
  setProducts,
  applyFilters,
  setSortBy,
  setPage,
  resetPagination,
  setLoading,
} = productSlice.actions;

export default productSlice.reducer;
