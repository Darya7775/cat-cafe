import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";

function StarCard({ image, name, about }) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
      </figure>
      <Title $size={TitleSize.SMALL}>{name}</Title>
      <p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}

export default StarCard;
