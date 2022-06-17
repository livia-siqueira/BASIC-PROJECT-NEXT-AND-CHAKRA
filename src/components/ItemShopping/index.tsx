import { Flex, Image, ListItem, Text } from "@chakra-ui/react";
import { Product } from "../../shared";

interface ItemShoppingProps {
  product: Product;
  isActive: boolean;
  handleAddToBag(id: number): void;
}
export function ItemShopíng({
  product,
  isActive,
  handleAddToBag,
}: ItemShoppingProps) {
  const { title, price, image } = product;
  return (
    <ListItem
      w="300px"
      border={isActive ? "5px solid #633bbc" : "1px solid white"}
      h="300px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="white"
      gap={8}
      borderRadius={12}
      pl={4}
      pr={4}
      cursor="pointer"
      onClick={() => handleAddToBag(product.id)}
    >
      <Text
        fontSize={14}
        textAlign="center"
        w="250px"
        overflow="hidden"
        lineHeight={1.25}
        whiteSpace="nowrap"
        textOverflow="ellipsis"
      >
        {title}
      </Text>

      <Image src={image} w={120} h={120} />
      <Text fontWeight="bold">R${price.toFixed(2)}</Text>
    </ListItem>
  );
}
