const PARAGRAPHS = 10;

let index = 0;

const reduceData = (data) =>
  data.reduce((acc, value) => {
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

export async function get() {
  const response = await fetch(
    `https://baconipsum.com/api/?callback=?type=all-meat&paras=${PARAGRAPHS}`
  );

  const responseJson = await response.json();

  const data = reduceData(responseJson);

  index = 0;

  return new Response(JSON.stringify(data), { status: 200 });
}
