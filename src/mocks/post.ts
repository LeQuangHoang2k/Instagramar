import { Story } from "react-insta-stories/dist/interfaces";
import { faker } from "@faker-js/faker";

export const images = [...Array(22)].map(() => ({
  id: "1",
  image: faker.image.avatar(),
  name: faker.person.fullName(),
  timeStamp: new Date(),
}));

export const stories = [...Array(22)].map(() => ({
  id: faker.string.uuid(),
  image:
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
  name: "Lê Quang Hoàng",
}));

export const storiesMocked: Story[] = [
  {
    url: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1598356918644-7a5af992f40c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwaWRlciUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];
