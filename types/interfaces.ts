import metadata from '../src/example-metadata.json';

export interface Options {
  featured?: boolean,
  orientation?: string,
  query?: string,
  width?: number | string,
  height?: number | string,
  random?: string,
}

export type Metadata = typeof metadata;
