import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from './authorType';
import { startup } from './startups';
import { playlist } from './playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, startup, playlist],
};
