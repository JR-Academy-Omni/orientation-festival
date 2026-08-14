import {Composition} from 'remotion';
import {DriverOffDutyCaptions} from './composition/DriverOffDutyCaptions';

export const Root = () => (
  <Composition
    id="DriverOffDutyCaptions"
    component={DriverOffDutyCaptions}
    durationInFrames={362}
    fps={24}
    width={720}
    height={1280}
  />
);
