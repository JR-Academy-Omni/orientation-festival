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

const EventInfoCard = () => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const rowStyle = (delay: number): CSSProperties => ({
    opacity: interpolate(frame, [delay, delay + 6], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
    translate: `0 ${interpolate(frame, [delay, delay + 7], [22, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    })}px`,
  });

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 42,
          right: 42,
          top: 785,
          padding: '28px 30px 30px',
          borderRadius: 30,
          border: `4px solid ${cream}`,
          background: 'rgba(4, 28, 44, 0.95)',
          boxShadow: `10px 12px 0 ${coral}, 0 18px 45px rgba(0,0,0,0.34)`,
          color: cream,
          fontFamily: 'Arial Black, Arial, sans-serif',
          opacity: enter,
          scale: interpolate(frame, [0, 8], [0.9, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
          }),
          translate: `0 ${interpolate(frame, [0, 8], [85, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        <div
          style={{
            ...rowStyle(3),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span
            style={{
              padding: '9px 18px 8px',
              borderRadius: 999,
              background: coral,
              color: cream,
              fontSize: 29,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            8月21日 · 周五
          </span>
          <span style={{color: lime, fontSize: 23, letterSpacing: '0.04em'}}>布里斯班新生节</span>
        </div>

        <div style={{...rowStyle(8), marginTop: 22, color: cream, fontSize: 62, lineHeight: 1}}>
          14:00–17:00
        </div>
        <div style={{...rowStyle(12), marginTop: 15, color: cyan, fontSize: 38, lineHeight: 1.08}}>
          Market Square · Sunnybank
        </div>
        <div
          style={{
            ...rowStyle(16),
            marginTop: 14,
            color: cream,
            fontFamily: 'Arial, sans-serif',
            fontSize: 25,
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          341 Mains Rd, Sunnybank QLD 4109
        </div>
        <div
          style={{
            ...rowStyle(20),
            display: 'inline-flex',
            marginTop: 24,
            padding: '10px 17px 9px',
            borderRadius: 12,
            background: cream,
            color: navy,
            fontSize: 29,
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          今天谁还接单？
        </div>
      </div>
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
        <Bubble side="center" tone="action" rotate={-3} fontSize={126}>上车！</Bubble>
      </Sequence>

      <Sequence from={Math.round(11.50 * fps)} durationInFrames={86} premountFor={fps}>
        <EventInfoCard />
      </Sequence>
    </AbsoluteFill>
  );
};
