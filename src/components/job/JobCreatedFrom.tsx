import { Text } from "@chakra-ui/layout";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { Duration } from "dayjs/plugin/duration";
import type { FC } from "react";
import { useEffect, useState } from "react";

const formatDuration = (duration: Duration): string => {
  if (duration.months() > 0) return `${duration.months()} month(s)`;
  if (duration.days() > 0) return `${duration.days()}d`;
  if (duration.hours() > 0) return `${duration.hours()}h`;
  if (duration.minutes() > 0) return `${duration.minutes()}min`;
  return `${duration.seconds()}sec`;
};

interface Props {
  createdAt: Dayjs;
}

const JobCreatedFrom: FC<Props> = ({ createdAt }: Props) => {
  const [createdForm, setCreatedForm] = useState(
    dayjs.duration(dayjs().diff(createdAt))
  );

  useEffect(() => {
    setCreatedForm(dayjs.duration(dayjs().diff(createdAt)));
  }, [createdAt]);

  return <Text>{formatDuration(createdForm)}</Text>;
};

export default JobCreatedFrom;
