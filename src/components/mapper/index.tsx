import React from "react";

export interface MapperProps<T> {
  id: string;
  list: T[];
  generateKey?: (item: T, index: number, mapId: string) => string;
  component: React.ElementType<{ item: T; index: number }>;
}

export default function Mapper<T>(props: MapperProps<T>) {
  const { component: Component, generateKey, list, id } = props;

  return (
    <>
      {list.map((item, index) => (
        <Component
          item={item}
          key={generateKey ? generateKey(item, index, id) : `${id}-${index}`}
          index={index}
        />
      ))}
    </>
  );
}
