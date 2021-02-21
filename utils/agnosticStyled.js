import { createElement } from 'react';
import styled from 'styled-components';

export default styled(({ tag = 'div', children, ...props }) =>
  createElement(tag, props, children)
);
