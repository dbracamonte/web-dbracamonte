import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const ToggleLang = () => {
  const { language, languages, originalPath } = useI18next();

  return (
    <>
      {languages
        .filter(lng => lng !== language)
        .map(lng => (
          <Link key={lng} to={originalPath} language={lng}>
            {lng.toUpperCase()}
          </Link>
        ))}
    </>
  );
};

export default ToggleLang;
