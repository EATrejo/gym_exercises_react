export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'c26f2f697cmsha8c408b1e590e5ap14beddjsn4ac22d4bcec1',
  },
};




export const fetchData = async (Url, options) => {
  const res = await fetch(Url, options);
  const data = await res.json();

  return data;
};