import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Error, Center, InputField } from './styles';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        recaptcha: '',
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(t('Full name field is required')),
        email: Yup.string()
          .email(t('Invalid email'))
          .required(t('Email field is required')),
        message: Yup.string().required(t('Message field is required')),
        recaptcha: Yup.string().required(t('Robots are not welcome yet!')),
      })}
      onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
        try {
          await axios({
            method: 'POST',
            url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              name,
              email,
              message,
            }),
          });
          setSubmitting(false);
          setFieldValue('success', true);
          setTimeout(() => resetForm(), 6000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue('success', false);
          alert(t('Something went wrong, please try again!')) // eslint-disable-line
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <InputField>
            <Input
              as={FastField}
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder={`${t('Full name')}*`}
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </InputField>
          <InputField>
            <Input
              id="email"
              aria-label="email"
              component="input"
              as={FastField}
              type="email"
              name="email"
              placeholder={`${t('Email')}*`}
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </InputField>
          <InputField>
            <Input
              as={FastField}
              component="textarea"
              aria-label="message"
              id="message"
              rows="8"
              type="text"
              name="message"
              placeholder={`${t('Message')}*`}
              error={touched.message && errors.message}
            />
            <ErrorMessage component={Error} name="message" />
          </InputField>
          {values.name && values.email && values.message && (
            <InputField>
              <FastField
                component={Recaptcha}
                sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                name="recaptcha"
                onChange={value => setFieldValue('recaptcha', value)}
              />
              <ErrorMessage component={Error} name="recaptcha" />
            </InputField>
          )}
          {values.success && (
            <InputField>
              <Center>
                <h4>
                  <Trans>Message has been successfully sent</Trans>
                </h4>
              </Center>
            </InputField>
          )}
          <Center>
            <Button secondary type="submit" disabled={isSubmitting}>
              <Trans>Submit</Trans>
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
