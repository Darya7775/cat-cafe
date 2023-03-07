import React from "react";
import CaffeGallery from "/src/components/blocks/caffe-gallery/caffe-gallery";
import Form from "/src/components/blocks/form/form";

function BuyPage({ gallery, buyOptions }) {
  return (
    <>
      <main>
        <CaffeGallery gallery={gallery} />
        <Form buyOptions={buyOptions} />
      </main>
    </>
  );
}

export default BuyPage;
