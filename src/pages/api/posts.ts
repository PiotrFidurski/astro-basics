const PARAGRAPHS = 10;

export async function get() {
  let index = 0;
  const response = await fetch(
    `https://baconipsum.com/api/?callback=?type=all-meat&paras=${PARAGRAPHS}`
  );

  const responseJson = await response.json();

  const data = responseJson.reduce((acc, value) => {
    acc = [
      ...acc,
      {
        text: value,
        id: index,
      },
    ];
    index = index + 1;
    return acc;
  }, []);

  return new Response(JSON.stringify(data), { status: 200 });
}
