import React, { ComponentType, FC } from "react";
import { ConfigProvider, ConfigProviderProps } from "antd";

const withConfigProvider = <P extends object>(
  Component: ComponentType<P>,
  config: ConfigProviderProps
): FC<P> => {
  const WrappedComponent: FC<P> = (props) => (
    <ConfigProvider {...config}>
      <Component {...props} />
    </ConfigProvider>
  );

  return WrappedComponent;
};

export default withConfigProvider;
