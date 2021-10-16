import React from "react";
import styled from "styled-components";

import {POPULAR_PRODUCTS} from "../../Data/Constant";
import ProductItem from "../ProductItem";

export default function Products() {
    return (
        <Container>
            {POPULAR_PRODUCTS.map(item=>(
                <ProductItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
