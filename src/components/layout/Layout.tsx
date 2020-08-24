import * as React from 'react';

import './Layout.sass';
import {prefixCls} from "../definition";
import classNames from "classnames";

export enum LayoutDirectionEnum {
    column = 'column',
    row = 'row',
}

export enum LayoutAlignEnum {
    start = 'start',
    center = 'center',
    end = 'end',
    baseline = 'baseline',
    spaceBetween = 'space-between',
}

export enum LayoutSizeEnum {
    xl = '20px',
    lg = '16px',
    md = '12px',
    sm = '8px',
    xs = '4px',
}

export interface IPropsLayout extends React.HTMLAttributes<HTMLDivElement>{
    direction?: LayoutDirectionEnum
    reverse?: boolean
    align?: LayoutAlignEnum
    size?: LayoutSizeEnum
}

function Layout(props : IPropsLayout) {
    const prefixClsComponent = 'layout';
    const outputPrefixCls = `${prefixCls}-${prefixClsComponent}`;
    const {children, className, direction, reverse, align, size, ...otherProps} = props;

    const outputDirection = direction ? direction : LayoutDirectionEnum.row;
    const outputReverse = reverse ? reverse : false;
    const outputReverseStyle = reverse ? '-reverse' : '';
    const outputAlign = align ? align : LayoutAlignEnum.start;
    const outputSize = size ? size : LayoutSizeEnum.md;

    const outputItemStyle = getStyleForItem(outputDirection, outputReverse, outputSize);
    const outputLayoutStyle = getStyleForLayout(outputDirection, outputReverse, outputSize);

    const outputClassName = classNames(
        className,
        `${outputPrefixCls}`,
        `${outputPrefixCls}-direction-${outputDirection}${outputReverseStyle}`,
        `${outputPrefixCls}-align-${outputAlign}`,
    {

    });

    const outputChildren = Array.isArray(children) ? children.map((v, k) => {
        return (
            <div key={k} style={outputItemStyle}>
                {v}
            </div>
        )
    }) : children;

    const outputProps = {
        className: outputClassName,
        style: outputLayoutStyle,
    };
    return <div {...otherProps} {...outputProps}>{outputChildren}</div>;
}

function getStyleForLayout(direction: LayoutDirectionEnum, reverse: boolean, size: string) {
    let outputStyle = {};
    const outputSize = size;
    if (direction === LayoutDirectionEnum.row) {
        if (reverse) {
            outputStyle = {marginTop: outputSize};
        } else {
            outputStyle = {marginBottom: outputSize};
        }
    } else {
        if (reverse) {
            outputStyle = {marginRight: outputSize};
        } else {
            outputStyle = {marginLeft: outputSize};
        }
    }
    return outputStyle;
}

function getStyleForItem(direction: LayoutDirectionEnum, reverse: boolean, size: string) {
    let outputStyle = {};
    const outputSize = size;
    if (direction === LayoutDirectionEnum.row) {
        if (reverse) {
            outputStyle = {marginLeft: outputSize};
        } else {
            outputStyle = {marginRight: outputSize};
        }
    } else {
        if (reverse) {
            outputStyle = {marginTop: outputSize};
        } else {
            outputStyle = {marginBottom: outputSize};
        }
    }
    return outputStyle;
}

export default Layout;
