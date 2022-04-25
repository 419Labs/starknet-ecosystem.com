export interface Network {
  website?: string;
  github?: string;
  twitter?: string;
  medium?: string;
  discord?: string;
  telegram?: string;
}

export interface Company {
  id: number;
  name: string;
  network: Network;
  logo: string;
}
