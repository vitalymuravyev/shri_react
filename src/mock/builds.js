import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 7);

const FIRST_NUMBER = 1236;
const MINUTES_IN_HOUR = 60;
const STATUSES = ['DONE', 'FAILED', 'WAIT'];
const TITLES = ['add documentation for postgres scaler', 'Super cool UI kit for making websites that look like games', 'upgrade typescript to 3.8',"replace all `div` to `article`", 'improved accessibility'];
const BRANCHES = ['master', 'stage', 'feature'];
const AUTHORS = ['Philip Kirkorov', 'Vadim Makeev', 'Vitaly Muravyev']
const MAX_DATE_GAP = 2;

const Duration = {
    MIN: 50,
    MAX: 125,
};
  
const getRandomInteger = (a, b = 0) => {
    const low = Math.ceil(Math.min(a, b));
    const max = Math.floor(Math.max(a, b));

    return Math.floor(low + Math.random() * (max - low + 1));
};
  
const generateRandomItem = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getRandomDuration = () => {
    const duration = getRandomInteger(Duration.MIN, Duration.MAX);

    return duration >= MINUTES_IN_HOUR ? `${Math.trunc(duration / MINUTES_IN_HOUR)}h ${duration % MINUTES_IN_HOUR}m` : `${duration}m`;
};

const getRandomDate = () => {
  const dateGap = getRandomInteger(MAX_DATE_GAP);
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() - dateGap);

  return currentDate;
};

const generateBuild = (index) => { 
  return {
    status: generateRandomItem(STATUSES),
    number: FIRST_NUMBER - index,
    title: generateRandomItem(TITLES),
    branch: generateRandomItem(BRANCHES),
    commit: nanoid(),
    author: generateRandomItem(AUTHORS),
    date: getRandomDate(),
    duration: getRandomDuration(),
  };

};

export const generateBuilds = (buildsCount) => Array(buildsCount).fill(``).map((value, index) => generateBuild(index));