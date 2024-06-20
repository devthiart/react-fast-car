import { Link } from "react-router-dom"

import BoxButtonLink from "./BoxButtonLink"

const ButtonLink = ({ children, id }) => {
  console.log(id);
  return (
    <BoxButtonLink>
      <Link to={`loja/${id}`}>{children}</Link>
    </BoxButtonLink>
  )
}

export default ButtonLink;
