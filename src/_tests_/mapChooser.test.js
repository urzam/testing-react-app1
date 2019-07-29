import mapChooser from '../mapChooser';

describe("mapChooser", function() {
   it("returns an image file name based on input to it", function() {
       let expected = "portland.jpg";
       let actual = mapChooser("portland");
       expect(actual).toEqual(expected);
   })
   it("returns an default image when no input is given", function() {
       let expected = "default.jpg";
       let actual = mapChooser("");
       expect(actual).toEqual(expected);
   })
});