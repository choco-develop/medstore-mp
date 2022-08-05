export function SampleNextArrow(props) { /* eslint-disable */
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={
        {
          ...style,
          background: '#1A8BB5',
          width: '60px',
          height: '40px',
          borderRadius: '50px 0 0 50px',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          paddingLeft: '10px',
          position: 'absolute',
          right: '-25px',
          zIndex: 50,
        }
      }
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={
        {
          ...style,
          background: '#1A8BB5',
          width: '60px',
          height: '40px',
          borderRadius: '0 50px 50px 0',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          paddingRight: '10px',
          position: 'absolute',
          left: '0px',
          zIndex: 50,
        }
      }
      onClick={onClick}
    />
  );
}
