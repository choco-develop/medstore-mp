import PropTypes from 'prop-types';

function StaffFields({ handleInputChange, inputFields }) {
  const {
    password,//eslint-disable-line
    password2,//eslint-disable-line
    phone_number,//eslint-disable-line
  } = inputFields; //eslint-disable-line
  const InputItem = ({ name, inputType = 'text', val }) => {
    const labelName = name.split('_').join(' ');

    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="flex flex-col">
          <span className="leading-10 font-serif text-gray-600 capitalize">{labelName}</span>
          <input
            type={inputType}
            id={name}
            name={name}
            className="border-2 border-main p-3 rounded-lg
                      placeholder:italic
                      focus:border-main focus:ring-0"
            placeholder="Enter your phone_number here..."
            onChange={handleInputChange}
            value={val}
            required
            autoFocus //eslint-disable-line
          />
        </label>
      </div>
    );
  };

  InputItem.propTypes = {
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired,
  };

  return (
    <>
      {Object.entries(inputFields).map(([key, val]) => (
        <InputItem key={`InputItem${key}`} name={key} inputType="text" val={val} />
      ))}
    </>
  );
}

StaffFields.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputFields: PropTypes.shape({
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
  }).isRequired,
};

export default StaffFields;
