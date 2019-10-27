import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import StyledLink from '../components/Link';
import Spacer from '../components/Spacer';
import Form from '../components/Form';
import { SIGNUP_ROUTE } from '../constants/routes';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { withUser } from '../providers/UserProvider';
import { withTranslation } from 'react-i18next';

const Content = styled.div`
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-weight: normal;
  font-style: italic;
  letter-spacing: 0px;
  line-height: 1.2em;
  font-family: 'Poppins', sans-serif;
  font-size: 4em;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -0.01em;
  line-height: 1.3em;
  text-transform: none;
  text-decoration: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 3em;
  }
`;

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  _handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  _handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.login(this.state.username, this.state.password);
      this.props.history.push('/');
    } catch (e) {
      toast.error(e, {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  render() {
    return (
      <Content>
        <Title>Sign In</Title>
        <Spacer />
        <Form onSubmit={this._handleFormSubmit}>
          <label htmlFor="username">{this.props.t('account.username')}</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={this.state.username}
            onChange={this._handleFormChange}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this._handleFormChange}
          />
          <Spacer />

          <Button>{this.props.t('account.sign_in')}</Button>
        </Form>
        <Spacer />

        <Spacer>
          Don't have an account?&nbsp;
          <StyledLink to={SIGNUP_ROUTE}>
            {this.props.t('account.sign_in')}
          </StyledLink>
        </Spacer>
      </Content>
    );
  }
}

export default withTranslation()(withRouter(withUser(SignInPage)));
