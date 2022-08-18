import React, { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import { FetchItems } from "../../Services/api";
import "./BrowseItems.css";
function BrowseItems() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemsFromBackend = async () => {
      const data = await FetchItems();
      setItem(data);
    };
    fetchItemsFromBackend();
  }, []);

  return (
    <div className="browseItems">
      {item?.map((item) => (
        <Product
          id={item.id}
          title={item.name}
          price={item.price}
          image={item.img}
        />
      ))}

      {/* <Product id={23} title="Bag" price={234} image={`./img/bed.jpg`} /> */}
    </div>
  );
}

export default BrowseItems;
