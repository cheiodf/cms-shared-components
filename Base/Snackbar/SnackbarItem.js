import { useMemo, useEffect, memo, useRef } from 'react';
import {
  SnackbarItemContainer,
  SnackbarCrossIconContainer,
  SnackbarIconContainer,
  SnackbarActionTextContainer,
  SnackbarRightSection
} from './snackbarStyles';
import SnackbarLibs from '../../../store/Snackbars/snackbarLibs';
import { CrossIcon } from '../../../components/Icons';
import Typography from '../Typography/Typography';
import useSnackbar from '../../hooks/useSnackbar';
import { useRouter } from 'next/router';

const SnackbarItem = ({ variant, content, action, id, close, index }) => {
  const animationDuration = useMemo(() => 500, []);
  const { closeSnackbar, open } = useSnackbar(id);
  const unmounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (close && !unmounted.current) closeSnackbar();
  }, [close]);

  const handleOnClickAction = () => {
    closeSnackbar();
    action.onClick && action.onClick();
    action.href && router.push(action.href);
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
              tag="p"
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
