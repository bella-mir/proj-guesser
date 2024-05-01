import { TProj } from "../components/map/map-constants";

export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getAnswers = ({
  type,
  element,
  array,
}: {
  type: "names" | "properties";
  element: number;
  array: TProj[];
}) => {
  if (type == "names") {
    const firstName = array[element].name;
    const randomNames: string[] = [];

    while (randomNames.length < 3) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomName = array[randomIndex].name;
      if (!randomNames.includes(randomName) && randomName !== firstName) {
        randomNames.push(randomName);
      }
    }

    const resultArray = [firstName, ...randomNames];
    return shuffleArray(resultArray);
  } else if (type === "properties") {
    const firstProperty = `${array[element].type} // ${array[element].property}`;
    const randomProperties: string[] = [];

    while (randomProperties.length < 3) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomProperty = `${array[randomIndex].type} // ${array[randomIndex].property}`;
      if (
        !randomProperties.includes(randomProperty) &&
        randomProperty !== firstProperty
      ) {
        randomProperties.push(randomProperty);
      }
    }

    const resultArray = [firstProperty, ...randomProperties];
    return shuffleArray(resultArray);
  } else {
    throw new Error("Invalid type parameter.");
  }
};

export const getRightAnswer = ({
  type,
  element,
  array,
}: {
  type: "names" | "properties";
  element: number;
  array: TProj[];
}) => {
  if (type == "names" && array[element]) {
    const firstName = array[element].name;
    return firstName;
  } else if (type === "properties" && array[element]) {
    const firstProperty = `${array[element].type} // ${array[element].property}`;
    return firstProperty;
  }
};
