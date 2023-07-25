import { Fragment } from 'react';
import { Data } from './data';
import { Minutes } from './minutes';
import { Sms } from './sms';

import '@/index.css';

export const Packs = () => {
  return (
    <Fragment>
      <Data />
      <Minutes />
      <Sms />
    </Fragment>
  );
};
