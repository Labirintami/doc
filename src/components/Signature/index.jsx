import React from 'react';

import cssstyles from './styles.module.scss';

const Signature = ({ children }) => {
  return (
    <p className={cssstyles.short}>{children}</p>
  );
};

export default Signature;