import Products from "../components/sections/Products";
import Services from "../components/sections/Services";
import Contact from "@/components/sections/contact";
import { useLocation, useParams } from "react-router-dom";

function ProductsAndServicesPage() {
  let { category } = useParams();
  const location = useLocation();

  // console.log(category, "from page");

  return (
    <>
      <div>
        {location.pathname.startsWith("/products") && (
          <Products category={category} />
        )}
      </div>
      <div>
        {location.pathname.startsWith("/services") && (
          <Services category={category} />
        )}
      </div>
      <Contact />
    </>
  );
}

export default ProductsAndServicesPage;
