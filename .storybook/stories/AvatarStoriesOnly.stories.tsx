import React from 'react';
import { Avatar } from '@storybook/design-system/dist/components/Avatar';

export default {
  title: 'Options|Stories only',
  component: Avatar,
  parameters: {
    dependencies: {
      withStoriesOnly: true,
    },  
  }
};

export const large = () => (
  <div>
    <Avatar loading size="large" />
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
    <Avatar loading />
    <Avatar username="Tom Coleman" />
    <Avatar username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);

export const small = () => (
  <div>
    <Avatar loading size="small" />
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
    <Avatar loading size="tiny" />
    <Avatar size="tiny" username="Dominic Nguyen" />
    <Avatar
      size="tiny"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);