import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Gallery from "/src/components/ui/gallery/gallery";

function CaffeGallery({ gallery }) {
  return gallery.length ? (
    <section>
      <Title size={TitleSize.BIG} level={2}>
        Галерея нашего кафе
      </Title>
      <Gallery gallery={gallery} />
    </section>
  ) : null;
}

export default CaffeGallery;
