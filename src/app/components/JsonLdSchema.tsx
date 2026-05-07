import React from 'react';

interface SchemaProps {
  data: Record<string, unknown>;
}

export const JsonLdSchema: React.FC<SchemaProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
};
