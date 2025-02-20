import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Christopher Rodriguez - Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              background: 'linear-gradient(to right, #38bdf8, #818cf8)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Christopher Rodriguez
          </h1>
          <p
            style={{
              fontSize: 30,
              color: '#94a3b8',
              margin: 0,
              marginTop: 10,
            }}
          >
            Full-Stack Developer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}