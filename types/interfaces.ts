import metadata from '../src/example-metadata.json';

export interface Options {
  featured?: boolean,
  orientation?: string,
  query?: string,
  width?: number,
  height?: number,
  random?: string,
}

export type Metadata = typeof metadata;
