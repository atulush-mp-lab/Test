import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 80,
          fontFamily: "sans-serif",
          opacity,
        }}
      >
        Hello from Remotion!
      </div>
    </AbsoluteFill>
  );
};
