export default function CampoFormulario({
  id,
  name,
  label,
  type = 'text',
  formato = 'input',
  rows = 4,
  required = false,
  autoComplete,
  placeholder,
  options = [],
  value,
  onChange,
}) {
  const clasesCampo =
    'w-full rounded-2xl border border-cmr-borderStrong bg-cmr-surface px-4 py-3.5 font-normal text-cmr-text outline-none transition duration-200 placeholder:text-cmr-textMuted/65 hover:border-cmr-green/45 focus:border-cmr-green focus:ring-4 focus:ring-cmr-green/15'

  return (
    <label
      htmlFor={id}
      className="grid gap-2 text-sm font-bold text-cmr-text"
    >
      <span>
        {label}

        {required && (
          <>
            <span
              aria-hidden="true"
              className="ml-1 text-cmr-green"
            >
              *
            </span>

            <span className="sr-only">
              Campo obligatorio
            </span>
          </>
        )}
      </span>

      {formato === 'textarea' && (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${clasesCampo} min-h-[120px] resize-y`}
        />
      )}

      {formato === 'select' && (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${clasesCampo} cursor-pointer`}
        >
          {placeholder && (
            <option
              value=""
              disabled
            >
              {placeholder}
            </option>
          )}

          {options.map((option) => {
            const optionValue =
              typeof option === 'string'
                ? option
                : option.value

            const optionLabel =
              typeof option === 'string'
                ? option
                : option.label

            return (
              <option
                key={optionValue}
                value={optionValue}
              >
                {optionLabel}
              </option>
            )
          })}
        </select>
      )}

      {formato === 'input' && (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clasesCampo}
        />
      )}
    </label>
  )
}