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
}) {
  const clasesCampo =
    'w-full rounded-2xl border border-cmr-line bg-white px-4 py-3.5 font-normal text-cmr-ink outline-none transition placeholder:text-cmr-muted/55 focus:border-cmr-green focus:ring-4 focus:ring-cmr-green/10'

  return (
    <label
      htmlFor={id}
      className="grid gap-2 text-sm font-bold text-cmr-ink"
    >
      <span>
        {label}

        {required && (
          <span
            aria-hidden="true"
            className="ml-1 text-cmr-green"
          >
            *
          </span>
        )}
      </span>

      {formato === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={`${clasesCampo} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={clasesCampo}
        />
      )}
    </label>
  )
}