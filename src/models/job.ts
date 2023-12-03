export interface Job {
  key: string;
  title: string;
  projectId: string;
  compensation?: {
    from: number;
    to: number;
    participation?: boolean;
    currency?: string; // "$" by default
  };
  tags: string[];
  location: string; // "City, State"
  remote?: boolean;
  aboutUs?: string;
  aboutYou?: string;
  description: string;
  responsibilities?: string;
  requirements?: string;
  offer?: string;
  applyLink?: string;
  createdOn: Date;
}
