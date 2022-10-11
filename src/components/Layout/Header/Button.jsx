import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ setOpen }) {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="bg-[#D10000] text-white font-medium font-Poppins text-sm text-center py-2 px-3 rounded-md hover:opacity-90"
        onClick={() => {
          setOpen(false);
        }}
      >
        Sign Up
      </button>
      <button
        type="button"
        className="bg-[#0060D1] text-white font-medium font-Poppins text-sm text-center py-2 px-3 rounded-md hover:opacity-90"
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
