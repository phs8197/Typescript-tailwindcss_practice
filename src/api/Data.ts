export interface DataProps {
  name: string;
  price: string;
  image: string;
}

export function Data(): DataProps[] {
  return [
    {
      name: "[프릳츠] 올드 독 200g",
      price: "KRW 16,000",
      image: "../img/11.png",
    },
    {
      name: "[프릳츠] 서울 시네마 200g",
      price: "KRW 16,000",
      image: "../img/12.png",
    },
    {
      name: "[프릳츠] 잘 되어가시나 200g",
      price: "KRW 16,000",
      image: "../img/13.png",
    },
    {
      name: "[프릳츠] 디카페인 Decaffeinated 200g",
      price: "KRW 16,000",
      image: "../img/14.png",
    },
    {
      name: "[프릳츠] 콜드브루 골드",
      price: "KRW 16,000",
      image: "../img/15.png",
    },
    {
      name: "[프릳츠] 콜드브루 딥슬립(디카페인)",
      price: "KRW 16,000",
      image: "../img/16.png",
    },
    {
      name: "[프릳츠] 꿀꺽꿀꺽 8개입",
      price: "KRW 16,000",
      image: "../img/17.png",
    },
    {
      name: "[프릳츠] 콜드브루 실버",
      price: "KRW 16,000",
      image: "../img/18.png",
    },
  ];
}
