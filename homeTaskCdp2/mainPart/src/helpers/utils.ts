// @ts-ignore
const sortByRating = (item2, item1) => item1.vote_average - item2.vote_average;

// @ts-ignore
const sortByDateStringProperty = (propertyName) => ({ [propertyName]: b }, { [propertyName]: a }) => a.localeCompare(b);

export { sortByDateStringProperty, sortByRating };
