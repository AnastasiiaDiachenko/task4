import React from 'react';
import FilmActions from './index';

export default {
  title: 'FilmActions',
  component: FilmActions,
};

const fn = () => 'test 2';

const Template = () => <FilmActions close={fn} openDelete={fn} openEdit={fn} />;

export const FilmActionsStory = Template.bind({});
