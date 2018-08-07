// Get visible expenses
const getValueFromObject = (outputArr, obj) => {
  for (let key in obj) {
    let elem = obj[key];
    if (typeof elem !== "object") {
      if (key !== "avatar") {
        outputArr.push(elem);
      }
    } else {
      getValueFromObject(outputArr, elem);
    }
  }
};
const objectToArray = obj => {
  const textValuesArr = [];
  getValueFromObject(textValuesArr, obj);
  return textValuesArr;
};

export default (clients, { text }) => {
  if (text) {
    return clients.filter(client => {
      const textValuesArr = objectToArray(client);
      let textMatch;
      for (let i = 0; i < textValuesArr.length; i++) {
        let re = new RegExp(text, "i");
        textMatch = textValuesArr[i].match(re);
        if (textMatch) break;
      }
      return textMatch;
    });
  }
  return clients;
};
