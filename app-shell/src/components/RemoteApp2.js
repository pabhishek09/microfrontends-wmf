import React, {useEffect, useRef} from 'react';
import mountRemote2 from 'app2/RemoteIndex';

const RemoteApp2 = () => {

  const remoteRef = useRef(null);

  useEffect(() => {
    mountRemote2(remoteRef.current);
  }, []);

  return (
    <div ref={remoteRef}/>
  )
};

export default RemoteApp2;
