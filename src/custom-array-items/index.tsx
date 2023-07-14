/**
 * 使用  useField formily 的模式 自定义组件
 * 务必使用  observer 包裹
 */
import * as React from 'react'

import { observer, useField, useFieldSchema, RecursionField } from '@formily/react'
import { ArrayField } from '@formily/core'
import { Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { FormItem } from '@formily/antd'

import './index.less'

export type ArrayItemHeaderProps = {
  headerTitle: string
}

const CustomArrayItems = observer((props: ArrayItemHeaderProps) => {
  const { headerTitle } = props
  const field = useField() as ArrayField
  const schema = useFieldSchema()
  return (
    <div className="custom-array-items">
      <div className="custom-array-items-header">
        <FormItem label={headerTitle} asterisk />
        <Button
          type="primary"
          onClick={() => {
            field.push({})
          }}
        >
          <PlusOutlined />
        </Button>
      </div>
      <div>
        {field.value?.map((item, index) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`custom-array-items-${index}`}
              style={{ marginBottom: 10 }}
              className="antd-formily-array-items-item-inner"
            >
              <span className="mr-2">{index + 1}</span>
              <RecursionField schema={schema.items} name={index} />
              {field?.editable && (
                <DeleteOutlined
                  onClick={() => {
                    field.remove(index)
                  }}
                  className="delete-action"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default CustomArrayItems
