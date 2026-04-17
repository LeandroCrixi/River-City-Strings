import { PortableText } from '@portabletext/react';

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} />;
}
