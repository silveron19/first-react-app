'use client';

import HelloButton from '../components/Button/HelloButton';

export default function Home() {
  return (
    <section
      style={{
        width: '100vw', //*alternatif width: 100% (sesuai induk)
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1
        style={{
          margin: 0,
          marginBottom: '12px',
          fontSize: '24px',
        }}>
        Welcome to my App
      </h1>
      <HelloButton buttonText={'silverman'} buttonText2={'love you 3000'} />
    </section>
  );
}
