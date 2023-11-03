export const getData = async () => {
    const response = await fetch("https://fathomless-falls-16151-f2ccead2eed5.herokuapp.com/api/books");
    const data = await response.json();
    return data;
}
