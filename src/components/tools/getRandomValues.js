const generateRandomInteger = (max) => {
    const num = Math.floor(Math.random() * max) + 1;
    return Number(num);
};

export default generateRandomInteger;
