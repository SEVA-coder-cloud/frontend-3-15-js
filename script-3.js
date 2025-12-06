const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
