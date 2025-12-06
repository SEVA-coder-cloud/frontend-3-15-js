const calculateTotalBalance = users => {
  return users.reduce((total, { balance }) => total + balance, 0);
};

console.log(calculateTotalBalance(users)); 