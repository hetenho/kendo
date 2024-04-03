// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
  const res = await fetch('https://api-web.nhle.com/v1/schedule/now');
  return res.json();
}
