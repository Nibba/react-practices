import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import useHover from './useHover';

export default () => {
  const [hoverRef, isHovered] = useHover() as any;

  return (
    <PageContainer>
      <Button ref={hoverRef}>鼠标放这里</Button>
      <div>{isHovered && 'hovered!'}</div>
    </PageContainer>
  );
};
