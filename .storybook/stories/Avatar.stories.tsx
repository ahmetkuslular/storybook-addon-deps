import React from 'react';
import { Avatar } from '@storybook/design-system/dist/components/Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const large = () => (
  <div>
    <Avatar size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

export const medium = () => (
  <div>
    <Avatar />
    <Avatar username="Tom Coleman" />
    <Avatar username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);

export const small = () => (
  <div>
    <Avatar size="small" />
    <Avatar size="small" username="Dominic Nguyen" />
    <Avatar
      size="small"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);

export const tiny = () => (
  <div>
    <Avatar size="tiny" />
    <Avatar size="tiny" username="Dominic Nguyen" />
    <Avatar
      size="tiny"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);