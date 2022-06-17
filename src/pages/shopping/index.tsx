import { Container, List } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ItemShopíng } from "../../components/ItemShopping";
import { Product, RootObject } from "../../shared";

export default function Shopping({ products }: RootObject) {
  const [productsCart, setProductsCart] = useState<Product[] | null>(null);

  const handleToBag = (id: number) => {
    const product = products.find((item) => item.id === id);
    setProductsCart((prev) => {
      if (prev && product) {
        if (productsCart?.find((itemP) => itemP.id === product.id)) {
          return prev.filter((item) => item.id !== id);
        }

        return [...prev, product];
      }
      if (product) return [product];

      return null;
    });
  };
  return (
    <Container bg="rgb(63 63 70)" maxW="100vw" minH="100vh" pt={20} pb={20}>
      <List display="flex" justifyContent="center" flexWrap="wrap" gap={8}>
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <ItemShopíng
                product={product}
                isActive={productsCart?.includes(product) as boolean}
                handleAddToBag={handleToBag}
              />
            );
          })}
      </List>
    </Container>
  );
}

export async function getServerSideProps() {
  const data = await axios.get("https://fakestoreapi.com/products");
  const products = data.data;
  return {
    props: {
      products,
    },
  };
}
