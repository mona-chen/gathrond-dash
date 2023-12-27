import React from 'react';

const GInput = ({
  id,
  name,
  onChange,
  label,
  type,
  hint,
  style,
  placeholder,
  className,
  value,
  chevron,
  selectOptions = [],
}) => {
  const selectStyle = {
    padding: '10px 15px 10px 15px',
    color: '#fff',
    width: '100%',
    backgroundColor: '#202022',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '16px 12px',
    border: '1px solid #69697a',
    borderRadius: '.5rem',
  };
  return (
    <div>
      {label && (
        <label for={id} class={`form-label className`}>
          {label}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          name={name}
          value={value}
          type={type || 'text'}
          class="form-control"
          id={id}
          aria-describedby={`${id}Help`}
        />
      ) : type === 'select' ? (
        <select
          placeholder={placeholder}
          onChange={(e) => {
            onChange({
              label: document.getElementsByTagName('option')[e.target.selectedIndex].label,
              value: e.target.value,
            });
          }}
          style={style}
          name={name}
          class={`${!chevron ? 'form-select' : ''}  form-select-custom ${className}`}
          id={id}
          value={value?.value}
          required
        >
          {typeof selectOptions === 'object' &&
            selectOptions?.map((chi, idx) => {
              return (
                <option
                  key={idx}
                  selected={value?.value === chi?.value}
                  disabled={value?.value === chi?.value}
                  value={chi?.value}
                >
                  {chi.label}
                </option>
              );
            })}
        </select>
      ) : (
        <input
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          value={value}
          name={name}
          type={type || 'text'}
          accept="image/jpeg, image/png, image/jpg, image/webp"
          class="form-control"
          id={id}
          aria-describedby={`${id}Help`}
        />
      )}
      {hint && (
        <div id={`${id}Help`} class="form-text">
          {hint}
        </div>
      )}
    </div>
  );
};

export default GInput;
