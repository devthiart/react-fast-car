import styled from "styled-components";

const BoxButtonLink = styled.span`
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 1.5rem;
  font-size: 1.5rem;

  a {
    color: white;
    font-weight: 400;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export default BoxButtonLink;