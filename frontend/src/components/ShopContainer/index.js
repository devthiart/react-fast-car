import styled from "styled-components";

const ShopContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export default ShopContainer
