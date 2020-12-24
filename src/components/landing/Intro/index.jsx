import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>
            <Trans>Hello</Trans>
          </h1>
          <h4>
            <Trans>Greeting</Trans>
          </h4>
          <Button as={AnchorLink} href="#contact">
            <Trans>Contact me</Trans>
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt={t('Greeting')} />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
