import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { compositionId } = await req.json();

  const bundled = await bundle({
    entryPoint: path.resolve("./remotion/index.ts"),
    webpackOverride: (config) => config,
  });

  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
    inputProps: {},
  });

  const outputPath = path.resolve(`./out/${compositionId}.mp4`);

  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    outputLocation: outputPath,
    inputProps: {},
  });

  return NextResponse.json({ output: outputPath });
}
