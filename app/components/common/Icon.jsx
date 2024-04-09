import FeatherIcon from 'feather-icons-react';

export function Icon(props) {
  const iconProps = {
    strokeWidth: 1,
    ...props,
  };

  return <FeatherIcon {...iconProps} />;
}
