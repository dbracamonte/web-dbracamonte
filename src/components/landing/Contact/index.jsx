import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <Wrapper as={Container} id="contact">
      <Details>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact} alt={t('Greeting')} />
      </Thumbnail>
    </Wrapper>
  );
};
