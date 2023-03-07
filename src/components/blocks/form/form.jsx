import React, { useState, useRef, useEffect } from "react";
import { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import Accordion from "/src/components/ui/accordion/accordion";
import {
  LiRate,
  UlRate,
  StyleRadioRate,
  UL,
  StyleImg,
  StyleSection,
  StyleForm,
  StyledTitle,
  StyleFieldset,
  StyleLegend,
  StyleRadioClock,
  ButtonRate,
  InputTotal
} from "./style";

function Form({ buyOptions }) {
  const clocks = buyOptions.durationOptions;
  const rate = buyOptions.ticketOptions;
  const [valueClock, serValueClock] = useState(clocks[0]);
  const [price, setPrice] = useState(rate[0].price);
  const showText = useRef(null);
  const [height, setHeight] = useState(null);
  const [isShowAccordIn, setShowAccordIn] = useState(rate[0].id);
  useEffect(() => {
    setHeight(showText.current.offsetHeight);
  }, [height, isShowAccordIn]);

  return (
    <StyleSection>
      <StyledTitle size={TitleSize.BIG} level={2}>
        Купить билет
      </StyledTitle>
      <StyleForm action="https://echo.htmlacademy.ru" method="post">
        <StyleFieldset>
          <StyleLegend>Продолжительность (часов)</StyleLegend>
          <UL>
            {clocks.map((item) => {
              return (
                <li key={item}>
                  <RadioButton
                    labelComponent={StyleRadioClock}
                    selectValue={valueClock}
                    name="clock"
                    text={item}
                    value={item}
                    onChange={(el) => serValueClock(Number(el.target.value))}
                  />
                </li>
              );
            })}
          </UL>
        </StyleFieldset>
        <StyleFieldset>
          <StyleLegend>Тип билета</StyleLegend>
          <UlRate>
            {rate.map((item, index) => {
              if (isShowAccordIn === index) {
                return (
                  <LiRate key={item.id}>
                    <RadioButton
                      labelComponent={StyleRadioRate}
                      selectValue={price}
                      name="rate"
                      text={item.title}
                      value={item.price}
                      onChange={(el) => setPrice(Number(el.target.value))}
                    />
                    <Accordion height={height} open={true}>
                      <ButtonRate ref={showText}>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></div>
                      </ButtonRate>
                    </Accordion>
                  </LiRate>
                );
              }
              return (
                <LiRate key={item.id}>
                  <RadioButton
                    labelComponent={StyleRadioRate}
                    selectValue={price}
                    name="rate"
                    text={item.title}
                    value={item.price}
                    onChange={(el) => setPrice(Number(el.target.value))}
                  />
                  <Accordion onChange={() => setShowAccordIn(index)}>
                    <ButtonRate>{item.description}</ButtonRate>
                  </Accordion>
                </LiRate>
              );
            })}
          </UlRate>
        </StyleFieldset>
        <StyleFieldset>
          <legend>Цена</legend>
          <label htmlFor="total"></label>
          <InputTotal
            type="text"
            name="total"
            id="total"
            value={valueClock * price}
            readonly
          />
        </StyleFieldset>
        <Button type="submit">Купить билет</Button>
      </StyleForm>
      <StyleImg />
    </StyleSection>
  );
}

export default Form;
