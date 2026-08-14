import type {CSSProperties, ReactNode} from 'react';
import {Video} from '@remotion/media';
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const navy = '#041C2C';
const cyan = '#37DDEB';
const lime = '#D8FF60';
const coral = '#FF624A';
const cream = '#FFF8EA';

type BubbleProps = {
  children: ReactNode;
  side: 'left' | 'right' | 'center';
  tone: 'question' | 'answer' | 'reveal' | 'action' | 'closing';
  rotate?: number;
  fontSize?: number;
  lifetime?: number;
  top?: number;
};

const Bubble = ({
  children,
  side,
  tone,
  rotate = 0,
  fontSize = 112,
  lifetime = 31,
  top,
}: BubbleProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isAnswer = tone === 'answer';
  const colors = {
    question: {background: cyan, foreground: navy, shadow: lime},
    answer: {background: lime, foreground: navy, shadow: coral},
    reveal: {background: navy, foreground: cream, shadow: cyan},
    action: {background: coral, foreground: cream, shadow: lime},
    closing: {background: cream, foreground: navy, shadow: coral},
  }[tone];
  const anchor: CSSProperties =
    side === 'left'
      ? {left: 54, top: top ?? 112}
      : side === 'right'
        ? {right: 54, top: top ?? 155}
        : {left: 54, right: 54, top: top ?? 118, alignItems: 'center'};

  return (
    <AbsoluteFill style={{pointerEvents: 'none', ...anchor}}>
      <div
        style={{
          alignSelf: side === 'right' ? 'flex-end' : side === 'left' ? 'flex-start' : 'center',
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isAnswer ? '18px 34px 13px' : '20px 34px 17px',
          borderRadius: isAnswer ? 10 : 22,
          border: `5px solid ${navy}`,
          backgroundColor: colors.background,
          color: colors.foreground,
          boxShadow: `10px 12px 0 ${colors.shadow}, 0 8px 26px rgba(0,0,0,0.25)`,
          fontFamily: 'Arial Black, Arial, sans-serif',
          fontSize,
          fontWeight: 950,
          lineHeight: 0.9,
          letterSpacing: '-0.055em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          opacity: interpolate(frame, [0, 3, lifetime - 6, lifetime], [0, 1, 1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: [Easing.bezier(0.16, 1, 0.3, 1), Easing.linear, Easing.bezier(0.7, 0, 0.84, 0)],
          }),
          scale: interpolate(frame, [0, 3, 7, lifetime - 6, lifetime], [0.3, 1.13, 1, 1, 0.92], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: [
              Easing.bezier(0.34, 1.56, 0.64, 1),
              Easing.bezier(0.16, 1, 0.3, 1),
              Easing.linear,
              Easing.bezier(0.7, 0, 0.84, 0),
            ],
          }),
          translate: interpolate(
            frame,
            [0, 5],
            [side === 'right' ? '85px 0px' : side === 'left' ? '-85px 0px' : '0px -55px', '0px 0px'],
            {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
          rotate: `${rotate + interpolate(frame, [0, 5], [isAnswer ? 10 : -6, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}deg`,
        }}
      >
        {children}
        <span
          style={{
            position: 'absolute',
            width: 16,
            height: 62,
            left: side === 'right' ? -30 : 'auto',
            right: side === 'left' ? -30 : 'auto',
            top: '50%',
            borderRadius: 9,
            background: colors.shadow,
            rotate: `${side === 'right' ? -42 : 42}deg`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

const QuestionAnswer = ({question, start}: {question: string; start: number}) => {
  const {fps} = useVideoConfig();
  return (
    <>
      <Sequence from={Math.round(start * fps)} durationInFrames={31} premountFor={fps}>
        <Bubble side="left" tone="question" rotate={-2}>{question}</Bubble>
      </Sequence>
      <Sequence from={Math.round((start + 0.92) * fps)} durationInFrames={28} premountFor={fps}>
        <Bubble side="right" tone="answer" rotate={3} fontSize={104}>NO.</Bubble>
      </Sequence>
    </>
  );
};

const SpeedLines = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      {Array.from({length: 12}).map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: 360,
            top: 540,
            width: interpolate(frame, [0, 6], [0, 210 + (index % 3) * 34], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            height: 9,
            borderRadius: 9,
            background: index % 2 === 0 ? lime : cyan,
            transformOrigin: '0 50%',
            rotate: `${index * 30}deg`,
            opacity: interpolate(frame, [0, 4, 24, 30], [0, 0.95, 0.95, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export const DriverOffDutyCaptions = () => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{backgroundColor: navy}}>
      <Video
        src={staticFile('source.mp4')}
        durationInFrames={362}
        objectFit="cover"
        style={{width: '100%', height: '100%'}}
      />

      <QuestionAnswer question="UQ?" start={1.32} />
      <QuestionAnswer question="QUT?" start={3.32} />
      <QuestionAnswer question="GRIFFITH?" start={5.29} />

      <Sequence from={Math.round(7.30 * fps)} durationInFrames={31} premountFor={fps}>
        <Bubble side="center" tone="question" fontSize={77}>WHERE THEN?</Bubble>
      </Sequence>
      <Sequence from={Math.round(8.27 * fps)} durationInFrames={33} premountFor={fps}>
        <Bubble side="center" tone="reveal" rotate={-1} fontSize={54}>FRESHERS FESTIVAL.</Bubble>
      </Sequence>

      <Sequence from={Math.round(9.72 * fps)} durationInFrames={34} premountFor={fps}>
        <SpeedLines />
        <Bubble side="center" tone="action" rotate={-3} fontSize={126}>上车！</Bubble>
      </Sequence>

      <Sequence from={Math.round(12.08 * fps)} durationInFrames={70} premountFor={fps}>
        <Bubble side="center" tone="closing" rotate={1} fontSize={54} lifetime={70} top={1005}>
          今天谁还接单？
        </Bubble>
      </Sequence>
    </AbsoluteFill>
  );
};
