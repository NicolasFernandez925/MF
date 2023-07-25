export const Footer = () => {
  return (
    <div
      style={{
        border: '1px solid var(--color-primary-gray-1)',
        padding: '0px 5px',
        height: '40px',
        display: 'grid',
        gridTemplateColumns: '0.8fr 3fr 0.6fr 0.8fr 1.2fr 0.5fr 0.5fr',
        backgroundColor: 'white',
      }}
      tabIndex={0}
    >
      <p style={{ fontSize: '12px', fontWeight: '600' }}>Total disponible</p>
      <p
        style={{
          fontSize: '12px',
          gridColumn: '4',
          padding: '0px 8px',
          fontWeight: '600',
        }}
      >
        2634.47 MB
      </p>
    </div>
  );
};
