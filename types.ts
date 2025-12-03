import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  targetAudience: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export enum TrainingType {
  ONLINE = 'Online Coaching',
  IN_PERSON = 'In-Person (London)',
  HYBRID = 'Hybrid Approach'
}