export const sortDynamic = (key, order = 'asc') => {
  const sortOrder = order === 'asc' ? 1 : -1;
  return (a, b) => {
    const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    if (A < B) {
      return sortOrder * -1;
    } if (A > B) {
      return sortOrder * 1;
    }
    return 0;
  };
};

const convertToFeet = (cm) => {
  const inCM = ((cm * 0.393700) / 12);
  const inFeet = Math.floor(inCM);
  const inInches = Math.round((inCM - inFeet) * 12);
  return `${inFeet}feet ${inInches}inches`;
};

const additionalQuery = (data) => {
  const initialValue = 0;
  const sum = data.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue.height),
    initialValue,
  );
  const totalHeight = {
    totalHeightInCM: sum,
    totalHeightInFeet: convertToFeet(sum),
  };
  const characterCount = {
    count: data.length,
  };
  data.push(totalHeight);
  data.push(characterCount);
  return data;
};

export const filteredCharacters = (filters, data) => {
  const filteredData = data.filter(
    (character) => character.gender.toLowerCase().includes(filters.toLowerCase()),
  );
  return additionalQuery(filteredData);
};

export const sortedCharacters = (data, sortParam, sortOrder) => {
  const sortedData = data.sort(sortDynamic(sortParam, sortOrder));

  return additionalQuery(sortedData);
};
