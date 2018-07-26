export default originalData => {
  return Object.keys(originalData).map(key => {
    const data = originalData[key];
    return {
      ...data,
      _id: key
    };
  });
};
