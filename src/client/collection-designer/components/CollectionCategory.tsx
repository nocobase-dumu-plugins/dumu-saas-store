import { observer } from '@formily/react';
import { useCompile } from '@nocobase/client';
import { Tag } from 'antd';
import React from 'react';

export const CollectionCategory = observer(
  (props: any) => {
    const { value } = props;
    const compile = useCompile();
    return (
      <>
        {value.map((item) => {
          return <Tag color={item.color}>{compile(item?.name)}</Tag>;
        })}
      </>
    );
  },
  { displayName: 'CollectionCategory' },
);
