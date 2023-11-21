import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavStyle } from './SharedLayout.styled';

const Link = styled(NavLink)`
  font-size: 30px;
  color: azure;
  text-decoration: none;
  &.active {
    color: blueviolet;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <NavStyle>
        <nav>
          <Link to="/" end>
            {' '}
            Home{' '}
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </NavStyle>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
};
