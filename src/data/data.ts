import { randomNumber } from "../utils/randomNumber";

interface IMemeData {
  id: number;
  name: string;
  img: string;
  likes: number;
}

export const memes: IMemeData[] = [
  {
    id: 1,
    name: "Toolbar",
    img: "https://assets.techrepublic.com/uploads/2017/05/maury-meme.jpg",
    likes: randomNumber(),
  },
  {
    id: 2,
    name: "Java vs JavaScript",
    img: "https://i.programmerhumor.io/2023/08/programmerhumor-io-java-memes-javascript-memes-de3618472052514.jpg",
    likes: randomNumber(),
  },
  {
    id: 3,
    name: "Status",
    img: "	https://i.programmerhumor.io/2021/11/programmerhumor-io-java-memes-javascript-memes-2a415e492165179.jpg",
    likes: randomNumber(),
  },
  {
    id: 4,
    name: "Tears",
    img: "https://i.programmerhumor.io/2022/11/programmerhumor-io-java-memes-javascript-memes-bbd9c7492fc2a47.jpg",
    likes: randomNumber(),
  },
  {
    id: 5,
    name: "Escape",
    img: "https://assets.techrepublic.com/uploads/2017/05/cat-meme.jpg",
    likes: randomNumber(),
  },
  {
    id: 6,
    name: "Support",
    img: "https://assets.techrepublic.com/uploads/2017/05/cat-tech-support-meme.jpg",
    likes: randomNumber(),
  },
  {
    id: 7,
    name: "Var",
    img: "https://i.redd.it/fryh34q1kmt31.jpg",
    likes: randomNumber(),
  },
  {
    id: 8,
    name: "Experience",
    img: "https://img.devrant.com/devrant/rant/r_1636864_s69Dj.jpg",
    likes: randomNumber(),
  },
  {
    id: 9,
    name: "Javascript",
    img: "https://miro.medium.com/v2/resize:fit:1400/0*m8khk9qf6ysfkB-i.jpg",
    likes: randomNumber(),
  },
  {
    id: 10,
    name: "Front vs Full",
    img: "https://i.programmerhumor.io/2021/12/programmerhumor-io-stackoverflow-memes-javascript-memes-344464169af9390.jpg",
    likes: randomNumber(),
  },
];
