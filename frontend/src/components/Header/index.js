import { styled } from 'styled-components'

const Header = () => {
  return (
    <HeaderStyle>
      <img src="/images/sandwichmenu.png" alt="menu"></img>
      <img src="/images/profilephoto.png" alt="foto do usuário"></img>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  top: 0;
  width: 90vw;
  height: 6vh;
  padding: 5vw;
`

export default Header;