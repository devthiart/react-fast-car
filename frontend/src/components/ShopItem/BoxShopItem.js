import styled from "styled-components"

const BoxShopItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 4px 4px 8px lightgray;

  .title-shop {
    margin: 0.75rem 0 0.25rem 0;
  }

  p {
    margin: 0.25rem 1rem;
    text-align: center;
  }

  .score {
    margin: 0 1rem 1rem 1rem;
  }

  @media (min-width: 800px) {
    max-width: 40vw;
  }

  @media (min-width: 1200px) {
    max-width: 25vw;
  }
`

export default BoxShopItem