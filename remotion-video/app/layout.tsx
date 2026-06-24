import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remotion Video App",
  description: "Generate videos with Remotion and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
