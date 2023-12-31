import {ResultPostRequestTranslateType, Translate} from './RequestTypes';

const API_KEY = 'AIzaSyCkN4oK4kgk-sxQVpmQ0xzfcEm4MMc9zxg';
export async function postRequest(
  text: string,
  source: string,
  target: string,
): Promise<Translate[]> {
  const baseUrl = 'https://translation.googleapis.com/language/translate/v2';
  const url = new URL(baseUrl);
  const params = {
    q: text,
    target,
    format: 'text',
    source,
    model: 'base',
    key: API_KEY,
  };

  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value),
  );

  const res = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result: ResultPostRequestTranslateType = await res.json();

  return result.data.translations;
}
