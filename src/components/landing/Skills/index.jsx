import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt={t('Greeting')} />
        </Thumbnail>
        <Details theme={theme}>
          <h1>
            <Trans>More about me</Trans>
          </h1>
          <p>
            <Trans>About me</Trans>
          </p>
          <Button as={AnchorLink} href="#contact">
            <Trans>Contact me</Trans>
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
