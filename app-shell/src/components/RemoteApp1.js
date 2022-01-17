import React, {useEffect, useRef} from 'react';
import mountRemote1 from 'app1/RemoteIndex';

const RemoteApp1 = () => {

  const remoteRef = useRef(null);

  useEffect(() => {
    mountRemote1(remoteRef.current);
  }, []);

  return (
    <div ref={remoteRef}/>
  )
};

export default RemoteApp1;
