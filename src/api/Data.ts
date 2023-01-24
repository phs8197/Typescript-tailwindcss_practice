export interface DataProps {
  name: string;
  price: string;
  image: string;
}

export async function Data(): Promise<DataProps[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/phs8197/fake-server/main/data.json",
    {
      method: "GET",
    }
  );
  const result = await response.json();

  return result;
}
