import type { ISchemaFieldProps } from '@formily/react'

/**
 * schema 可读性和维护型较差 ，且没有类型提示 ，除 接口下发以外的 场景 不推荐使用
 */
export const schema: ISchemaFieldProps['schema'] = {
  properties: {
    is_custom: {
      title: '是否定制',
      required: true,
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        options: [
          {
            label: '否',
            value: 0,
          },
          {
            label: '是',
            value: 1,
          },
        ],
      },
      default: 0,
    },
    username: {
      title: '用户名',
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-reactions': {
        dependencies: ['.is_custom'],
        fulfill: {
          schema: {
            'x-component-props.prefix': "{{$deps[0] === 0 ? '通用-' : '定制-'}}", //任意层次属性都支持表达式，同时key是支持路径表达式的，可以实现精确操作属性
          },
        },
      },
    },
    phone: {
      title: '手机号',
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'phone',
      'x-reactions': {
        dependencies: ['.is_custom'],
        fulfill: {
          schema: {
            'x-visible': '{{$deps[0] === 1}}',
          },
        },
      },
    },
    custom_fields: {
      type: 'void',
      'x-reactions': {
        dependencies: ['.is_custom'],
        fulfill: {
          schema: {
            'x-visible': '{{$deps[0] === 1}}',
          },
          // $deps $self 等 更多内置变量 见 https://react.formilyjs.org/zh-CN/api/shared/schema#%E7%B1%BB%E5%9E%8B
          run: "{{console.log('dev reactions.fulfill.run',{$deps,$self})}}",
        },
      },
      properties: {
        custom_name: {
          title: '定制名称',
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-validator': 'phone',
        },
        custom_id: {
          title: '定制id',
          type: 'string',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-validator': 'phone',
        },
      },
    },
    choose_type: {
      title: '选择类型',
      required: true,
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        options: [
          {
            label: '全部选择',
            value: 1,
          },
          {
            label: '部分选择',
            value: 2,
          },
        ],
      },
      default: 2,
    },
    need_service: {
      title: '所需服务',
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        mode: 'multiple',
        options: [
          {
            label: '服务1',
            value: 1,
          },
          {
            label: '服务2',
            value: 2,
          },
          {
            label: '服务3',
            value: 3,
          },
        ],
      },
      'x-reactions': {
        dependencies: ['.choose_type'],
        fulfill: {
          state: {
            disabled: '{{$deps[0]===1}}',
          },
        },
      },
    },
    city_id: {
      title: '城市',
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        options: [
          {
            label: '北京',
            value: 1,
          },
          {
            label: '四川',
            value: 2,
          },
          {
            label: '重庆',
            value: 3,
          },
        ],
      },
    },
    province_id: {
      title: '省份',
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        options: [
          {
            label: '北京',
            value: 1,
          },
          {
            label: '泸州',
            value: 2,
          },
          {
            label: '成都',
            value: 3,
          },
        ],
      },
    },
  },
}
