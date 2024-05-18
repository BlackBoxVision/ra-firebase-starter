import { useMemo } from "react";
import {
  DateFieldProps,
  DateField as RaDateField,
  useLocales,
} from "react-admin";

const dateOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

export default function DateField(props: DateFieldProps) {
  let locales = useLocales();

  let allLocales = useMemo(() => {
    return locales.map((item) => item.locale);
  }, [locales]);

  return (
    <RaDateField
      emptyText="-"
      locales={allLocales}
      options={dateOptions}
      {...props}
    />
  );
}
