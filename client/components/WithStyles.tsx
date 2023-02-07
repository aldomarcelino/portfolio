import React from "react";

type Props = {};

const WithStyles = (props: Props) => {
  console.log(props);

  return (
    <div className="">
      <div>
        <img src="" alt="gambar" />
      </div>
      <div>
        <h1>Ikan asin</h1>
      </div>
    </div>
  );
};

export default WithStyles;
