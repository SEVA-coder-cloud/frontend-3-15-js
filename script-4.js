const getSortedUniqueSkills = users => {
  return users
    .flatMap(({ skills }) => skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
};



console.log(getSortedUniqueSkills(users));
