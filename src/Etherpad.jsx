import React from 'react';

const Etherpad = ({namepad}) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <iframe name="embed_readwrite" src="http://localhost:9001/p/hyper?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  );
};

export default Etherpad;