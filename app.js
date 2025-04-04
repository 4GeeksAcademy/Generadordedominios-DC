let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".io"];

pronoun.forEach(function (a) {
  adj.forEach(function (b) {
    noun.forEach(function (c) {
      domain.forEach(function (d) {
        console.log(a + b + c + d);
      });
    });
  });
});
