let globalSalary = 14;
const SuperObject = (type, multiple) => {
  let salary = 0;
  return {
    type,
    sum: (num) => {
      salary += num * multiple;
      return salary;
    },
    setSum: (num) => {
      salary = num;
    },
    globalSum: (num) => {
      globalSalary += num * multiple;
      return globalSalary;
    },
  };
};

module.exports = SuperObject;
