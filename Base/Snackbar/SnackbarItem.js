import { useMemo, useEffect, memo } from 'react';
import {
  SnackbarItemContainer,
  SnackbarCrossIconContainer,
  SnackbarIconContainer,
  SnackbarActionTextContainer,
  SnackbarRightSection
} from './snackbarStyles';
import SnackbarLibs from '../../../store/Snackbars/snackbarLibs';
import { CrossIcon } from '../../Icons';
import Typography from '../Typography/Typography';
import useSnackbar from '../../../hooks/useSnackbar';

const SnackbarItem = ({ variant, content, action, id, close, index }) => {
  const animationDuration = useMemo(() => 500, []);
  const { closeSnackbar, open } = useSnackbar(id);

  useEffect(() => {
    if (close) closeSnackbar(id);
  }, [close]);

  const handleOnClickAction = () => {
    closeSnackbar(id, animationDuration);
    action.onClick && action.onClick();
  };

  return (
    <SnackbarItemContainer
      variant={variant}
      animationDuration={animationDuration}
      open={open}
      index={index}
    >
      <SnackbarIconContainer>
        {SnackbarLibs.renderIcon(variant)}
      </SnackbarIconContainer>
      <Typography size={0.875} maxLines={2} color="white">
        {content}
      </Typography>

      <SnackbarRightSection>
        {action && (
          <SnackbarActionTextContainer>
            <Typography
              tag={action.href ? 'a' : 'p'}
              href={action.href}
              onClick={handleOnClickAction}
              size={0.875}
              maxLines={2}
              color="white"
              target={action.external ? '_blank' : null}
              padding="0.25rem 0.75rem"
            >
              {action.title}
            </Typography>
          </SnackbarActionTextContainer>
        )}

        <SnackbarCrossIconContainer
          onClick={() => closeSnackbar(id, animationDuration)}
        >
          <CrossIcon width={11} color="var(--snackbar-icon)" />
        </SnackbarCrossIconContainer>
      </SnackbarRightSection>
    </SnackbarItemContainer>
  );
};

export default memo(SnackbarItem);
