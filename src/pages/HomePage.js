import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import io from 'socket.io-client';
// providers
import { withUser } from '../providers/UserProvider';
// components
import SingleFieldForm from '../components/SingleFieldForm';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import StyledLink from '../components/Link';

// constants
import { WS_ROOT } from '../constants/api';
import { SIGNIN_ROUTE } from '../constants/routes';
import { SERVER_EVENT, CLIENT_EVENT } from '../constants/events';
import List from '../components/List';

const Content = styled.div`
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  color: ${props => props.theme.text};
`;

const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-family: 'Poppins', sans-serif;
  font-size: 5em;
  font-weight: 600;
  font-style: normal;
  line-height: 1.3em;
  text-transform: none;
  text-decoration: none;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 3em;
  }
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.text};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.2em;
  font-family: 'Poppins', sans-serif;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    this.socket = io(WS_ROOT);
    this.socket.emit(SERVER_EVENT.LOGIN, {
      username: this.props.username,
      password: this.props.password,
      token: this.props.token
    });

    this.socket.on(CLIENT_EVENT.UPDATE_ROOMS, data => {
      this.setState({ rooms: data });
    });
  }
  render() {
    return (
      <Content>
        <Title>Skible</Title>
        {this.props.isLogged ? (
          <>
            <SubTitle>Join room</SubTitle>
            {this.state.rooms.length > 0 ? (
              <List>
                {this.state.rooms.map(room => (
                  <li key={room.name}>
                    <span>{`#${room.name} (${room.userNb} / 10)`}</span>
                    <StyledLink to={`/room/${room.name}`}>Join</StyledLink>
                  </li>
                ))}
              </List>
            ) : (
              <Description>No room existing rooms</Description>
            )}
            <Spacer>OR</Spacer>
            <SubTitle>Create room</SubTitle>
            <SingleFieldForm
              placeholder="Room name..."
              onSubmit={value => this.props.history.push(`/room/${value}`)}
            />
          </>
        ) : (
          <>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <Button onClick={() => this.props.history.push(SIGNIN_ROUTE)}>
              Sign In
            </Button>
          </>
        )}
        <Spacer />
      </Content>
    );
  }
}

export default withRouter(withUser(HomePage));
