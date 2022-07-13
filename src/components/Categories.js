import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const checkStatusButton = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={() => checkStatusButton()}>Check status</button>
      <p>{status}</p>
    </>
  );
};

export default Categories;
