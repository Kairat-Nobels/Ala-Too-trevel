import React from 'react';

function ModalAdd({ handleHide }) {
  return (
    <div>
      <button onClick={handleHide}>X</button>
      <form>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}

export default ModalAdd;
