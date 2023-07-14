import * as React from 'react'

import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'
import { NumberPicker, FormItem, Submit, Input, FormLayout, FormButtonGroup, Select } from '@formily/antd'
import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'

import LandLine, { land_line_validator } from './land-line'
import CustomArrayItems from './custom-array-items'

const SchemaField = createSchemaField({
  components: { FormLayout, FormItem, NumberPicker, Submit, Input, Select, LandLine, CustomArrayItems },
})

export default function App() {
  const form = React.useMemo(() => createForm(), [])

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField>
          <SchemaField.String
            name="land_line"
            title="座机号码"
            x-component="LandLine"
            x-decorator="FormItem"
            x-validator={{
              validator: land_line_validator,
            }}
          />
          <SchemaField.Array name="array" title="用户列表" x-component="CustomArrayItems" x-decorator="FormItem">
            <SchemaField.Object>
              <SchemaField.String name="name" title="名字" x-component="Input" x-decorator="FormItem" />
              <SchemaField.Number
                name="age"
                title="年龄"
                x-component="NumberPicker"
                x-decorator="FormItem"
                x-component-props={{ addonAfter: '岁' }}
              />
              <SchemaField.Number
                name="height"
                title="身高"
                x-component="NumberPicker"
                x-decorator="FormItem"
                x-component-props={{ addonAfter: 'cm' }}
              />
            </SchemaField.Object>
          </SchemaField.Array>
        </SchemaField>
        <FormButtonGroup.FormItem>
          <Submit onSubmit={console.log}>提交</Submit>
          <Button
            onClick={() => {
              form.setState((state) => {
                state.editable = !state.editable
              })
            }}
          >
            切换阅读态
          </Button>
        </FormButtonGroup.FormItem>
      </FormLayout>
    </FormProvider>
  )
}
