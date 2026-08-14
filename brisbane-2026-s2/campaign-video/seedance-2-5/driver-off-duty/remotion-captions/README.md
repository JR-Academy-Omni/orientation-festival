# Driver Off Duty · Remotion Caption Effects

Remotion overlay pass for the verified 15-second Seedance master. The source
video remains the only audio source; this composition adds deterministic visual
dialogue effects only: `UQ?`, `QUT?`, `GRIFFITH?`, three `NO.` stamps,
`WHERE THEN?`, `FRESHERS FESTIVAL.`, `上车！` and `今天谁还接单？`.

## Build

```bash
cp ../final/brisbane-freshers-festival-driver-off-duty.mp4 public/source.mp4
npm install
npm run render
```

Composition: `DriverOffDutyCaptions`, 720x1280, 24 fps, 362 frames.

The overlays are timed manually against the verified transcript rather than
automatic word detection because the generated dialogue is intentionally short
and some words are difficult for ASR to distinguish.

The final render passed the following checks:

- 720x1280 H.264, 24 fps, 48 kHz stereo AAC, 15.13 seconds;
- 270px contact-sheet inspection with no text outside the mobile safe area;
- isolated closing-audio ASR: `布里斯班新生节，今天谁还接单，`;
- public S3 video and cover readback before updating the internal registry.

Status remains `verified_internal`; this is not evidence of social publication.
