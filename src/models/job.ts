export interface Job {
  key: string;
  title: string;
  companyId: number;
  compensation?: {
    from: number;
    to: number;
    participation?: boolean;
    currency?: string; // "$" by default
  };
  tags: string[];
  location: string; // "City, State"
  remote?: boolean;
  description: string;
  applyLink: string;
  createdOn: Date;
}
