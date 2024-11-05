import { OverlayProvider } from 'overlay-kit';

export const ReactOverlayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};
