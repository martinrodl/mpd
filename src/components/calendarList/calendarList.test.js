import mockData from './mockEvents';
import CalendarList from './calendarList';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('Consistency of mockData', () => {
  expect(mockData).toMatchSnapshot();
});
