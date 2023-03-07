import React from "react";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StyledStarsSection, StyledStarsUl, StyledStarsLi } from "./style";

function StarsList({ stars }) {
  return (
    <StyledStarsSection>
      {stars.length ? (
        <>
          <Title level={2}>Наши звёзды</Title>
          <StyledStarsUl>
            {stars.map((star) => (
              <StyledStarsLi key={star.id}>
                <StarCard {...star} />
              </StyledStarsLi>
            ))}
          </StyledStarsUl>
          <Button minWidth={353} link="buy">
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledStarsSection>
  );
}

export default StarsList;
