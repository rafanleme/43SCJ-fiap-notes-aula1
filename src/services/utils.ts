const options: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
  timeStyle: "medium"
};

export const formatDate = (date: Date) =>
  Intl.DateTimeFormat(navigator.language, options).format(date);
