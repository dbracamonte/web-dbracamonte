import React from 'react';
import { Container } from 'components/common';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Darwin Bracamonte</h2>
        <span>
          © <Trans>All rights are reserved</Trans> | {new Date().getFullYear()} | by{' '}
          <a href="mailto:bracamontedar@gmail.com">dbracamonte</a>{' '}
          <span aria-label="love" role="img">
            ✞
          </span>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
