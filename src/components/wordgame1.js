import React from 'react';
import React from "react";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";

ReactDOM.render(
  <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  />,
  document.getElementById("root")
);

