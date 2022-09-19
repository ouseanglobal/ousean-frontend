import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ setOpen }) {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="bg-[#BAD3B6] text-[#195018] font-medium font-Montserrat text-2xl text-center px-5 rounded-3xl hover:opacity-90"
        onClick={() => {
          setOpen(false);
        }}
      >
        Sign Up
      </button>
      <button
        type="button"
        className="bg-[#43B031] text-white font-medium font-Montserrat text-2xl text-center py-2 px-5 rounded-3xl hover:opacity-90"
        onClick={() => {
          setOpen(false);
        }}
      >
        Login
      </button>
    </div>
  );
}

Button.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
