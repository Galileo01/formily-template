import { ArrayField, Field, Form } from '@formily/core';

export const dependencyValidator = (value: number[] | undefined, rules, ctx: { field: ArrayField; form: Form }) => {
  const { field, form } = ctx;
  const number1Field = form.query('.number1').take() as Field | undefined;
  const number3Field = field.query('.number3').take() as Field | undefined;

  if (number1Field && !number1Field.value) {
    return `请先填写${number1Field.title}`;
  }
  if (number3Field && !number3Field.value) {
    return `请先填写${number3Field.title}`;
  }
  return null;
};

const validValue = [10, 20, 30];

const judgeValid = (value: number) =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(validValue.includes(value));
    }, 500);
  });

export const asyncValidator = async (value: number[] | undefined) => {
  try {
    if (!value || value.length === 0) return null;

    const [min, max] = value;
    const minValid = await judgeValid(min);
    if (!minValid) {
      return '最小值非法';
    }
    const maxValid = await judgeValid(max);
    if (!maxValid) {
      return '最大值非法';
    }

    return null;
  } catch {
    return null;
  }
};
