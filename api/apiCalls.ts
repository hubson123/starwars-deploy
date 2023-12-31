import { API_URL } from "../constants";

export async function getStarships(currentPage: number) {
  const response = await fetch(`${API_URL}/starships?page=${currentPage}`);
  return response;
}
export async function getFilms() {
  const response = await fetch(`${API_URL}/films/`);
  return response;
}
