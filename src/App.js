import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductListingPage from "./pages/ProductListingPage";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { applyFilters, setSortBy } from "./redux/slices/productSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
     // eslint-disable-next-line react-hooks/exhaustive-deps
    const params = new URLSearchParams(location.search);
    const sortBy = params.get("sortBy") || "lowToHigh";

    const serializedFilters = params.get("filter");
    const filter = JSON.parse(decodeURIComponent(serializedFilters));

    dispatch(setSortBy(sortBy));
    filter && dispatch(applyFilters(filter));
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductListingPage />
      <Footer />
    </div>
  );
}

export default App;
