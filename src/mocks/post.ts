import { faker } from "@faker-js/faker";

export const images = [...Array(22)].map(() => ({
  id: "1",
  image: faker.image.avatar(),
  name: faker.person.fullName(),
  timeStamp: new Date(),
}));

export const stories = [...Array(22)].map(() => ({
  id: faker.string.uuid(),
  image: faker.image.avatar(),
  name: faker.person.fullName(),
}));
