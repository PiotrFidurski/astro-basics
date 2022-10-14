export async function post({ request }) {
  const response = await request.json();

  return new Response(JSON.stringify(response.data?.name?.first), {
    status: 200,
  });
}
