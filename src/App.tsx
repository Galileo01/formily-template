import React from 'react'

import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { FormItem, Input, FormLayout, Select, Radio } from '@formily/antd'

import 'antd/dist/antd.compact.min.css'
import '@formily/antd/esm/style.less'

import { schema } from './schema'

const SchemaField = createSchemaField({ components: { FormItem, Input, FormLayout, Select, Radio } })

export default function App() {
  const form = React.useMemo(() => createForm(), [])

  return (
    <FormProvider form={form}>
      <FormLayout labelCol={6} wrapperCol={10}>
        <SchemaField schema={schema} />
      </FormLayout>
    </FormProvider>
  )
}
