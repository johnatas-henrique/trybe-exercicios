import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Game from './Game';

afterEach(cleanup);

describe('game tests', () => {
  test('rendering game info', () => {
    const { getByTestId } = render(<Game />);
    const gameInfoDiv = getByTestId(/game-info/i);
    expect(gameInfoDiv).toBeInTheDocument();
  });
  test('rendering all squares clean', () => {
    const { getByTestId } = render(<Game />);
    const square0 = getByTestId(/game-square-0/i);
    expect(square0).toBeInTheDocument();
    expect(square0.innerHTML).toBe('');
    const square1 = getByTestId(/game-square-1/i);
    expect(square1).toBeInTheDocument();
    expect(square1.innerHTML).toBe('');
    const square2 = getByTestId(/game-square-2/i);
    expect(square2).toBeInTheDocument();
    expect(square2.innerHTML).toBe('');
    const square3 = getByTestId(/game-square-3/i);
    expect(square3).toBeInTheDocument();
    expect(square3.innerHTML).toBe('');
    const square4 = getByTestId(/game-square-4/i);
    expect(square4).toBeInTheDocument();
    expect(square4.innerHTML).toBe('');
    const square5 = getByTestId(/game-square-5/i);
    expect(square5).toBeInTheDocument();
    expect(square5.innerHTML).toBe('');
    const square6 = getByTestId(/game-square-6/i);
    expect(square6).toBeInTheDocument();
    expect(square6.innerHTML).toBe('');
    const square7 = getByTestId(/game-square-7/i);
    expect(square7).toBeInTheDocument();
    expect(square7.innerHTML).toBe('');
    const square8 = getByTestId(/game-square-8/i);
    expect(square8).toBeInTheDocument();
    expect(square8.innerHTML).toBe('');
  });
  test('testing square click', () => {
    const { getByTestId } = render(<Game />);
    const square0 = getByTestId(/game-square-0/i);
    expect(square0).toBeInTheDocument();
    expect(square0.innerHTML).toBe('');
    fireEvent.click(square0);
    expect(square0.innerHTML).toBe('X');
  });
  test('testing game end', () => {
    const { getByText, getByTestId } = render(<Game />);
    const square0 = getByTestId(/game-square-0/i);
    fireEvent.click(square0);
    const square7 = getByTestId(/game-square-7/i);
    fireEvent.click(square7);
    const square1 = getByTestId(/game-square-1/i);
    fireEvent.click(square1);
    const square8 = getByTestId(/game-square-8/i);
    fireEvent.click(square8);
    const square2 = getByTestId(/game-square-2/i);
    fireEvent.click(square2);
    expect(getByText(/Winner: X/i));  
  });
});
