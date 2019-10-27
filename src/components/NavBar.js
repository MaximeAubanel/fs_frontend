import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../constants/routes';
import { UserConsumer } from '../providers/UserProvider';
import { useTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavElem = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  text-decoration: none;
  color: ${props => props.theme.primary};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  padding: 2rem 0;
`;

const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <UserConsumer>
      {({ username, isLogged }) => (
        <Content>
          <NavElem to={SIGNIN_ROUTE}>{`${
            isLogged ? username : t('home.hello')
          } (${process.env.NODE_ENV})`}</NavElem>
          <ReactFlagsSelect
            defaultCountry="GB"
            countries={['GB', 'FR']}
            showSelectedLabel={false}
            onSelect={cc => i18n.changeLanguage(cc.toLocaleLowerCase())}
          />
        </Content>
      )}
    </UserConsumer>
  );
};

export default NavBar;
