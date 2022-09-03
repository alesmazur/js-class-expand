// lets make some new Class that will extends some already exsiting Class
// and extended Class will be without construcor method, cause in initial Class  is

class SumArray extends Array {
  sum() {
    return this.reduce((element, accumulator) => (accumulator += element), 0);
  }
}
// so now lets create some instance of our extanded Array

const testArray = new SumArray(2, 4, 6, 8);
console.log(testArray);
console.log(testArray.sum());
