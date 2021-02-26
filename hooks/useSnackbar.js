import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSnackbar,
  openSnackbar
} from '../../store/Snackbars/snackbarActions';

const useSnackbar = (id, animationDuration = 500) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const { list } = useSelector(({ snackbars }) => snackbars);

  useEffect(() => {
    if (open === true && id !== 'hola')
      setTimeout(() => handleCloseSnackbar(id, animationDuration), 5000);
  }, [open, id]);

  const handleCloseSnackbar = useCallback(
    id => {
      if (open === true) {
        setOpen(0.5);
        setTimeout(() => {
          dispatch(closeSnackbar({ id }));
          setOpen(false);
        }, animationDuration); // closing delay for css animation
      }
    },
    [open, closeSnackbar, setOpen, dispatch]
  );

  const handleOpenSnackbar = useCallback(
    snackbar => dispatch(openSnackbar(snackbar)),
    [list]
  );

  return {
    openSnackbar: handleOpenSnackbar,
    closeSnackbar: handleCloseSnackbar,
    open
  };
};

export default useSnackbar;
