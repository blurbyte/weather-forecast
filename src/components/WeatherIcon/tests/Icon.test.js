import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

jest.mock('../../Icons', () => ({
  BrokenClouds: 'BrokenClouds',
  ClearSkyDay: 'ClearSkyDay',
  ClearSkyNight: 'ClearSkyNight',
  FewCloudsDay: 'FewCloudsDay',
  FewCloudsNight: 'FewCloudsNight',
  Mist: 'Mist',
  RainDay: 'RainDay',
  RainNight: 'RainNight',
  ScatteredClouds: 'ScatteredClouds',
  ShowerRain: 'ShowerRain',
  Snow: 'Snow',
  Thunderstorm: 'Thunderstorm'
}));

test('renders ClearSkyDay', () => {
  const component = renderer.create(<Icon weatherId={800} isDaytime />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders ClearSkyNight', () => {
  const component = renderer.create(<Icon weatherId={800} isDaytime={false} />);
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

test('renders RainDay', () => {
  const component = renderer.create(<Icon weatherId={502} isDaytime />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders RainNight', () => {
  const component = renderer.create(<Icon weatherId={514} isDaytime={false} />);
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

test('renders FewCloudsDay', () => {
  const component = renderer.create(<Icon weatherId={801} isDaytime />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders FewCloudsNight', () => {
  const component = renderer.create(<Icon weatherId={801} isDaytime={false} />);
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

test('renders ClearSkyDay by default', () => {
  const component = renderer.create(<Icon weatherId={9000} />);
  expect(component.toJSON()).toMatchSnapshot();
});
