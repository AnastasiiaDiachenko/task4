import React from 'react';
import DeleteFilm from './index';

export default {
  title: 'DeleteFilm',
  component: DeleteFilm
};

const Template = () => <DeleteFilm deleteFilm={() => 'tets 2'} />;

export const DeleteStory = Template.bind({});
