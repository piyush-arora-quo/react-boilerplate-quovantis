import React from 'react';
import AsyncPage from '../../components/AsyncComponent';
import Title from '../../components/Title';
import user from '../../assets/images/user.png';

const Root = () => {
  return (
    <div className="color center">
      <Title>Hello!! This is React from scratch</Title>
      <img src={user} alt="" />
      <AsyncPage page="OtherComponent" />
    </div>
  );
};

export default Root;
