import { getInfo } from "../../src/helpers/getInfo";

//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect

test('test_join', () => {
    // arrange
    var object = {
      "name" :["carmela","iryna"]
    }
    //act
    var result = getInfo(object)
    
    // assert
    expect(result).toBe("carmela,iryna");
});

//TODO: write a test if no data is passed to the function (returns "none")

test('test_return none if no data is passed', () => {
    var result = getInfo()
    expect(result).toBe("none");
});