import * as React from 'react';

import { observer, useField, useFieldSchema, RecursionField } from '@formily/react';
import { ArrayField } from '@formily/core';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FormItem } from '@formily/antd';
import cn from 'classnames';

import styles from './index.module.less';

export type ArrayItemHeaderProps = {
  value?: Array<any>;
  headerTitle: string;
  addText: string;
};

const CustomArrayItems = observer((props: ArrayItemHeaderProps) => {
  const { value, headerTitle, addText } = props;
  const field = useField() as ArrayField;
  const schema = useFieldSchema();
  return (
    <div className={cn(styles['custom-array-items'], 'custom-array-items')}>
      <div
        className={cn(
          'flex items-center justify-between custom-array-items-header',
          styles['custom-array-items-header']
        )}>
        <FormItem label={headerTitle} asterisk />
        <Button
          type="link"
          onClick={() => {
            field.push({});
          }}>
          <PlusOutlined />
          {addText}
        </Button>
      </div>
      <div>
        {value?.map((item, index) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`custom-array-items-${index}`}
              style={{ marginBottom: 10 }}
              className="arco-formily-array-items-item-inner w-ful">
              <span className="mr-2">{index + 1}</span>
              <RecursionField schema={schema.items} name={index} />
              <div
                onClick={() => {
                  field.remove(index);
                }}
                className="text-[#979AA8] cursor-pointer ml-3 shrink-0">
                删除
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CustomArrayItems;
