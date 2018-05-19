import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

jest.mock('../../Icons', () => ({
  BrokenClouds: 'BrokenClouds',
  ClearSkyDay: 'ClearSkyDay',
  FewClouds: 'FewClouds',
  Mist: 'Mist',
  Rain: 'Rain',
  ScatteredClouds: 'ScatteredClouds',
  ShowerRain: 'ShowerRain',
  Snow: 'Snow',
  Thunderstorm: 'Thunderstorm'
}));

test('renders ClearSky', () => {
  const component = renderer.create(<Icon weatherId={800} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders Thunderstorm', () => {
  const component = renderer.create(<Icon weatherId={220} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders ShowerRain', () => {
  const component = renderer.create(<Icon weatherId={314} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders Rain', () => {
  const component = renderer.create(<Icon weatherId={502} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders Snow', () => {
  const component = renderer.create(<Icon weatherId={606} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders Mist', () => {
  const component = renderer.create(<Icon weatherId={714} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders FewClouds', () => {
  const component = renderer.create(<Icon weatherId={801} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders ScatteredClouds', () => {
  const component = renderer.create(<Icon weatherId={802} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders BrokenClouds', () => {
  const component = renderer.create(<Icon weatherId={803} />);
  expect(component.toJSON()).toMatchSnapshot();

  component.update(<Icon weatherId={804} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders ClearSky by default', () => {
  const component = renderer.create(<Icon weatherId={9000} />);
  expect(component.toJSON()).toMatchSnapshot();
});
