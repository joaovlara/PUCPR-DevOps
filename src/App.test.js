import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./App";

test("renderiza o contador com valor inicial 0", () => {
  render(<Counter />);
  expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
});

test("incrementa o contador quando clicado", () => {
  render(<Counter />);
  const button = screen.getByText("Adicionar");
  fireEvent.click(button);
  expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();
});

test("decrementa o contador quando clicado", () => {
  render(<Counter />);
  const button = screen.getByText("Remover");
  fireEvent.click(button);
  expect(screen.getByText(/Contador: -1/i)).toBeInTheDocument();
});

test("existe o botão de adicionar", () => {
  render(<Counter />);
  expect(screen.getByText("Adicionar")).toBeInTheDocument();
});

test("existe o botão de remover", () => {
  render(<Counter />);
  expect(screen.getByText("Remover")).toBeInTheDocument();
});