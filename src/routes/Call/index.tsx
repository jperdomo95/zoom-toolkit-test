import { useRef } from "react";
import uitoolkit from '@zoom/videosdk-ui-toolkit'
import generateSignature from "../../utils/jwt";
import { getExploreName } from "../../utils/platform";

const Call = () => {
  const sessionContainer = useRef<HTMLDivElement>(null);
  const handleJoinCall = () => {
    console.log('Joining call...');
    const jwt = generateSignature({ sessionName: 'Zoom SDK Test', role: 1, sessionKey: '1234567890', userIdentity: ['test'] });
    sessionContainer.current && uitoolkit.joinSession(
      sessionContainer.current,
      {
        userName: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
        videoSDKJWT: jwt,
        features: ['video', 'audio', 'share', 'chat', 'users', 'settings'],
        sessionPasscode: 'abc123',
        sessionName: 'Zoom SDK Test', 
      }
    );
  };
  
  return (
    <div>
      <button className="btn btn-primary" onClick={() => handleJoinCall()}>Join Call</button>
      <div id="session-container" ref={sessionContainer}></div>
    </div>
  );
};

export default Call;