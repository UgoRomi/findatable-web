import { fetch as _fetch } from 'undici';

declare global {
  var fetch: typeof _fetch;
}
