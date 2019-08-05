import React, {Fragment} from "react";

const handleTextClick = () => {
  alert("Clicked on text");
}

const Home = () => {
  return (
    <Fragment>
      Hi, this is homepage of React Server side application
    </Fragment>
  );
}

export default Home;
