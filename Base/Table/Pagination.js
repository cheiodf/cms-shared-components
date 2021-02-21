import { memo, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../Icons';
import Button from '../Button/Button';
import { paginationProps, paginationDefaultProps } from './tableProps';
import { PaginationContainer } from './tableStyles';

const Pagination = ({ totalPages, actualPage, onChange }) => {
  const maxShowedPages = 3;

  const getPagesToShow = useCallback(() => {
    let pages = [];

    if (totalPages <= maxShowedPages) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const diff = totalPages - actualPage;
      const maxSpace = Math.floor((maxShowedPages - 1) / 2);
      const startPage =
        diff >= maxSpace
          ? actualPage - maxSpace < 1
            ? 1
            : actualPage - maxSpace
          : actualPage + diff - maxShowedPages + 1;
      pages = Array.from({ length: maxShowedPages }, (_, i) => i + startPage);
    }

    return pages;
  }, [actualPage, totalPages, maxShowedPages]);

  const pages = getPagesToShow();

  return (
    <PaginationContainer>
      <Button
        onClick={() => onChange(actualPage - 1)}
        disabled={actualPage === 1}
        variant="light"
        rounded
        size="xs"
        outline
      >
        <ArrowLeftIcon width={12} color="var(--pagination-btn-color)" />
      </Button>
      {pages.map(page => (
        <Button
          key={Math.random()}
          isActive={true}
          onClick={() => onChange(page)}
          variant={actualPage === page ? 'primary' : 'light'}
          outline={actualPage !== page}
          rounded
          size="xs"
          color={actualPage !== page ? 'var(--pagination-btn-color)' : null}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => onChange(actualPage + 1)}
        disabled={actualPage === totalPages}
        variant="light"
        rounded
        size="xs"
        outline
      >
        <ArrowRightIcon width={12} color="var(--pagination-btn-color)" />
      </Button>
    </PaginationContainer>
  );
};

Pagination.propTypes = paginationProps;
Pagination.defaultProps = paginationDefaultProps;

export default memo(Pagination);
