import {
  DateFieldProps,
  DateField as RaDateField,
  useLocale,
} from "react-admin";

const dateOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export default function DateField(props: DateFieldProps) {
  let locale = useLocale();

  return (
    <RaDateField
      emptyText="-"
      locales={locale}
      options={dateOptions}
      {...props}
    />
  );
}
