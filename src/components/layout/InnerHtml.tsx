import DOMPurify from "dompurify";
import type { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  html: string;
}

const InnerHtml: FC<Props> = ({ html }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState<string>();
  useEffect(() => setSanitizedHtml(DOMPurify.sanitize(html)), [html]);
  if (!sanitizedHtml) return null;
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default InnerHtml;
