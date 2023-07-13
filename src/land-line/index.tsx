/**
 * 使用 经典 的模式 value + onChange
 */

import * as React from 'react';

import { Input } from '@formily/antd';
import { InputProps, Col, Row } from 'antd';
import { connect, mapReadPretty } from '@formily/react';

import './index.less';

export type LandLineProps = Pick<InputProps, 'disabled'> & {
  value?: string;
  tip?: string;
  onChange?: (value?: string) => void;
};

const LandLine = (props: LandLineProps) => {
  const { value, onChange, tip } = props;

  const phoneInfo = React.useMemo(() => {
    if (!value) return undefined;
    const [districtNum, phoneNum] = value!.split('-');
    return {
      districtNum,
      phoneNum,
    };
  }, [value]);

  return (
    <div className="land_line">
      <Row>
        <Col span={6}>
          <Input
            placeholder="区号"
            maxLength={5}
            value={phoneInfo?.districtNum}
            onChange={(e) => {
              const _value = e.target.value;
              const latestValue = phoneInfo?.phoneNum ? `${_value}-${phoneInfo.phoneNum}` : _value;
              onChange?.(latestValue);
            }}
          />
        </Col>
        <Col span={18}>
          <Input
            placeholder="座机号"
            maxLength={8}
            value={phoneInfo?.phoneNum}
            onChange={(e) => {
              const _value = e.target.value;
              const latestValue = phoneInfo?.districtNum ? `${phoneInfo.districtNum}-${_value}` : _value;
              onChange?.(latestValue);
            }}
          />
        </Col>
      </Row>
      {tip && <div className="tip">{tip}</div>}
    </div>
  );
};

const LandLineConnected = connect(
  LandLine,
  // 只读状态展示
  mapReadPretty(({ value }: { value: string | undefined }) => <span>{value || '-'}</span>)
);

export const land_line_validator = (value: string | undefined) => {
  if (!value) return null;
  const [districtNum, phoneNum] = value.split('-');

  if (!districtNum) {
    return '输入区号';
  }
  if (!phoneNum) {
    return '输入座机号';
  }

  return null;
};

export default LandLineConnected;
