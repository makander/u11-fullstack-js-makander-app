const storeToken = (token) => {
  document.cookie = `coffeePot=${token}`;
};

export default storeToken;
