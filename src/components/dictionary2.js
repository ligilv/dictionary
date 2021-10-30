import React, { useState } from "react";

function Dictionary2() {
  const correction = {
    realy: "really",
    gud: "good",
    helo: "hello",
  };
  const [sentence, setSentence] = useState("");
  const correctMe = (e) => {
    // setSentence(e.target.value);
    var word = e.target.value.split(" ");

    // back to string
    setSentence(word.join(" "));
    if (e.keyCode == 32) {
      //getting last word from array (word)
      var notLast = word[word.length - 1];

      //comparinf last word with object disctionary
      if (Object.keys(correction).includes(notLast)) {
        //get value from object
        var correct = correction[notLast];
        word.pop();
        word.push(correct);
        //reverting  back to string
        setSentence(word.join(" "));
        console.log("if", sentence);
        // setSentence(word.push(correction[notLast]).join(""));
      }
      //   console.log(notLast);
    }
  };
  return (
    <>
      <h1>Dictionary</h1>
      <textarea
        onChange={(e) => setSentence(e.target.value)}
        onKeyDown={(e) => {
          correctMe(e);
        }}
        value={sentence}
      >
        {/* {sentence} */}
      </textarea>
    </>
  );
}

export default Dictionary2;
//1 store sentence as array and then join
//1)if Keyboard ==space
