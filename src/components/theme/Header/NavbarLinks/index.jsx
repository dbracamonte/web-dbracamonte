import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleLang from 'components/theme/Header/ToggleLang';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">
        <Trans>About</Trans>
      </AnchorLink>
      <AnchorLink href="#projects">
        <Trans>Projects</Trans>
      </AnchorLink>
      <AnchorLink href="#contact">
        <Trans>Contact</Trans>
      </AnchorLink>
      <ToggleLang />
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
