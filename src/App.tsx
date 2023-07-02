import React from "react";
import "antd/dist/antd.compact.min.css";
import "@formily/antd/esm/style.less";
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/react";
import { FormItem, Input } from "@formily/antd";

const SchemaField = createSchemaField({ components: { FormItem, Input } });

export default function App() {
  const form = React.useMemo(() => createForm(), []);

  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.String
          name="username"
          title="用户名"
          required
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField>
    </FormProvider>
  );
}
