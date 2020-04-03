import React from 'react';
import FamilyContext from '../FamilyContext';

const Daughter = () => {
  return (
    <FamilyContext.Consumer>
      {(context) => (
        <>
          <div>`Tenho uma herança de R$ {context.inheritance} que recebi do meu bisavô`</div>
          <div>{JSON.stringify(context.xyz)}</div>
          <button type="button" onClick={context.xyz}>Click me!</button>
        </>
      )}
    </FamilyContext.Consumer>
  );
};

export default Daughter;
