import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
  startingPrice: number;
  features: string[];
  deliverables: string[];
  timeline: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}
