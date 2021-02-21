import { props, defaultProps } from './formProps';
import { FormContainer, FormFieldset } from './formStyles';

const Form = ({ onSubmit, loading, children }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormFieldset disabled={loading}>{children}</FormFieldset>
    </FormContainer>
  );
};

Form.propTypes = props;
Form.defaultProps = defaultProps;

export default Form;
