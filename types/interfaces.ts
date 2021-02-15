import metadata from '../src/example-metadata.json';

export interface Options {
  featured?: string,
  orientation?: string,
  search?: string,
  width?: number,
  height?: number,
  random?: string,
}

export type Metadata = typeof metadata;
