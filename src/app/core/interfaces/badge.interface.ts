export type BadgeType = 'popular' | 'discount' | 'new' | 'sale';

export interface Badge {
  type: BadgeType;
  label: string;
}
