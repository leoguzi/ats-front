export interface Position {
  title: string;
  description: string;
  numberOfCandidates: number;
  applyed?: boolean;
  actions?: string[];
}

export type Positions = Array<Position>;
