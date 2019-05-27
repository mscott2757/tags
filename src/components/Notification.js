import React from 'react';
import styled from 'styled-components';
import { compose, branch, renderNothing } from 'recompose';
import { TextNormal } from './Core';
import { connect } from 'react-redux';

const enhance = compose(
  connect(
    ({ showSuccess }) => ({ showSuccess }),
  ),
  branch(
    ({ showSuccess }) => !showSuccess,
    renderNothing,
  )
);

const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  padding: 15px;
`;

const Text = styled(TextNormal)`
  color: white;
`;

const NotificationComp = () => (
  <FixedContainer>
    <Text>Success!</Text>
  </FixedContainer>
);

export const Notification = enhance(NotificationComp);
