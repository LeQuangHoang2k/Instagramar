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
