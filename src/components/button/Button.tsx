import * as React from 'react';

import './Button.sass';
import classNames from "classnames";
import {ColorEnum, prefixCls, SizeEnum} from "../definition";
import {LoadingOutlined} from "@ant-design/icons/lib";

interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizeEnum
    color?: ColorEnum
    icon?: JSX.Element
    loading?: boolean
}

function Button(props : IPropsButton) {
    const prefixClsComponent = 'button';
    const outputPrefixCls = `${prefixCls}-${prefixClsComponent}`;

    const {children, color, icon, className, size, disabled, loading, ...otherProps} = props;

    const outputSize = size ? size : SizeEnum.md;
    const outputColor = color ? color : ColorEnum.default;
    const outputLoading = loading ? loading : false;
    const outputDisabled = outputLoading || disabled;

    const outputClassName = classNames(
        className,
        `${outputPrefixCls}`,
        `${outputPrefixCls}-${outputSize}`,
        `${outputPrefixCls}-${outputColor}`,
    {
        [`${outputPrefixCls}-${outputColor}-disabled`]: disabled
    });

    const outputProps = {
        className: outputClassName,
        disabled: outputDisabled,
    };

    //TODO: require to test for some iconfont
    const outputIcon = loading ? (<LoadingOutlined spin />) : icon;
    const iconDom = outputIcon ? (
        <div className={`${outputPrefixCls}-icon`}>{outputIcon}</div>
    ) : <></>;
    const labelDom = (
        <div className={`${outputPrefixCls}-label`}>{children}</div>
    );
    return (
        <button {...outputProps} {...otherProps}>
            {iconDom} {labelDom}
        </button>
    )
}


export default Button;
