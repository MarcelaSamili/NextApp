import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './authorType';
import { startup } from './startups';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, startup],
};
