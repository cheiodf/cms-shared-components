import PropTypes from 'prop-types';

export const tableProps = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number,
  onChangePagination: PropTypes.func,
  totalPages: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object),
  globalActions: PropTypes.arrayOf(PropTypes.object),
  primaryKey: PropTypes.string,
  avatar: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string // /route/:key
};
export const tableDefaultProps = {
  primaryKey: '_id'
};

export const paginationProps = {
  totalPages: PropTypes.number.isRequired,
  actualPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export const paginationDefaultProps = {};
