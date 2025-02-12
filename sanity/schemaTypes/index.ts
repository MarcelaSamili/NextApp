import { type SchemaTypeDefinition } from 'sanity';
import { authorType } from '@/sanity/schemaTypes/authorType';
import { startup } from '@/sanity/schemaTypes/startups';
import { playlist } from '@/sanity/schemaTypes/playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, startup, playlist],
};
