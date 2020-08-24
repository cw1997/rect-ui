import * as React from 'react';

import './Input.sass';
import classNames from "classnames";
import {prefixCls, ColorEnum, SizeEnum} from "../definition";
import {ReactNode} from "react";

interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    controlSize?: SizeEnum
    insideBefore?: ReactNode
    insideAfter?: ReactNode
    outsideBefore?: ReactNode
    outsideAfter?: ReactNode
}

function Input(props : IPropsInput) {
    const prefixClsComponent = 'input';
    const outputPrefixCls = `${prefixCls}-${prefixClsComponent}`;

    const {children, color, className, size, disabled, insideBefore, insideAfter, outsideBefore, outsideAfter, ...otherProps} = props;

    const outputSize = size ? size : SizeEnum.md;
    const outputColor = color ? color : ColorEnum.default;
    const outputDisabled = disabled ? disabled : false;

    const prefixClsControl = 'control';
    const outputControlClassName = classNames(
        `${outputPrefixCls}-${prefixClsControl}`
    );
    const outputClassName = classNames(
        className,
        `${outputControlClassName}`,
        `${outputControlClassName}-${outputSize}`,
        `${outputControlClassName}-${outputColor}`,
    {
        [`${outputPrefixCls}-${outputColor}-disabled`]: disabled
    });

    const outputOutsideClassName = classNames(
        `${outputPrefixCls}-outside`
    );
    const outputInsideClassName = classNames(
        `${outputPrefixCls}-inside`
    );

    const outputProps = {
        className: outputClassName,
        disabled: outputDisabled,
    };

    let ref: any;
    const setFocus = () => {
        ref.focus();
    };

    const insideLeftDom = insideBefore ? (
        <div className={`${outputPrefixCls}-inside-left`} onClick={setFocus}>{insideBefore}</div>
    ) : <></>;
    const insideRightDom = insideAfter ? (
        <div className={`${outputPrefixCls}-inside-right`} onClick={setFocus}>{insideAfter}</div>
    ) : <></>;
    const outsideLeftDom = outsideBefore ? (
        <div className={`${outputPrefixCls}-outside-left`}>{outsideBefore}</div>
    ) : <></>;
    const outsideRightDom = outsideAfter ? (
        <div className={`${outputPrefixCls}-outside-right`}>{outsideAfter}</div>
    ) : <></>;

    const inputDom = (
        <input {...outputProps} {...otherProps} ref={ref} />
    );
    const insideDom = (
        <div className={outputInsideClassName}>
            {insideLeftDom}
            {inputDom}
            {insideRightDom}
        </div>
    );
    const dom = outsideLeftDom || outsideRightDom ? (
        <div className={outputOutsideClassName}>
            {outsideLeftDom}
            {insideDom}
            {outsideRightDom}
        </div>
    ) : (
        insideLeftDom || insideRightDom ?
        {insideDom} : {inputDom}
    );
    return dom;
}


export default Input;
