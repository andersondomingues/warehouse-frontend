import { ReactNode } from 'react';
import style from './testbuild.module.scss';

interface Props {
  children?: ReactNode;
}

const TestBuild = ({ children }: Props) => {
  const loc = window.location.href;

  let classname = style.testbuild_none;
  let message = '';

  if (loc.indexOf('test') > -1) {
    classname = style.testbuild_test;
    message = 'TEST BUILD';
  } else if (loc.indexOf('localhost') > -1) {
    classname = style.testbuild_local;
    message = 'LOCAL BUILD';
  }

  return <div className={classname}>{message}</div>;
};

export { TestBuild };
