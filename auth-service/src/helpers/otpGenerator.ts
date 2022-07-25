const otpGenerator = (num: number) : string => {
  const finalNum = num - 1;
  return Math.floor(
    Math.pow(10, finalNum) + Math.random() * (9 * Math.pow(10, finalNum))
  ).toString();
};

export default otpGenerator;