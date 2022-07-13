import React from 'react'
import Pages from './pages/Pages'
import Category from './Category'
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>ReciP</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: 400;
 font-family: 'Lobster Two', cursive;
`;
 const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
 `;

export default App;
