export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  crew: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
  films: string[];
}
export interface Film {
  title: string;
  release_date: string;
  director: string;
  episode_id: number;
  url: string;
}
