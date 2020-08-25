import * as React from 'react';

import './Demo.sass';
import {Button, ColorEnum, Input, Layout, SizeEnum} from "../src";
import {LoginOutlined} from '@ant-design/icons/lib';

import '../src/index.sass'

interface IPropsIndex {

}

export default function Demo(props : IPropsIndex) {
    return (
        <div className="Demo">
            <ComponentItem title="按钮">
                <Layout>
                    <Button size={SizeEnum.sm}>按钮</Button>
                    <Button size={SizeEnum.sm}>Button</Button>
                    <Button size={SizeEnum.sm}>按钮Button</Button>
                    <Button size={SizeEnum.sm} color={ColorEnum.primary}>按钮Button</Button>
                    <Button size={SizeEnum.sm} color={ColorEnum.line}>按钮Button</Button>
                </Layout>
                <Layout>
                    <Button>按钮</Button>
                    <Button>Button</Button>
                    <Button>按钮Button</Button>
                    <Button color={ColorEnum.primary}>按钮Button</Button>
                    <Button color={ColorEnum.line}>按钮Button</Button>
                </Layout>
                <Layout>
                    <Button icon={<LoginOutlined />} size={SizeEnum.lg}>按钮</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.lg}>Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.lg}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.lg} color={ColorEnum.primary}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.lg} color={ColorEnum.line}>按钮Button</Button>
                </Layout>
                <Layout>
                    <Button icon={<LoginOutlined />} disabled>按钮</Button>
                    <Button icon={<LoginOutlined />} disabled>Button</Button>
                    <Button icon={<LoginOutlined />} disabled>按钮Button</Button>
                    <Button icon={<LoginOutlined />} disabled color={ColorEnum.primary}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} disabled color={ColorEnum.line}>按钮Button</Button>
                </Layout>
                <Layout>
                    <Button icon={<LoginOutlined />}>按钮</Button>
                    <Button icon={<LoginOutlined />}>Button</Button>
                    <Button icon={<LoginOutlined />}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} color={ColorEnum.primary}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} color={ColorEnum.line}>按钮Button</Button>
                </Layout>
                <Layout>
                    <Button loading={true}>按钮</Button>
                    <Button loading={true}>Button</Button>
                    <Button loading={true}>按钮Button</Button>
                    <Button loading={true} color={ColorEnum.primary}>按钮Button</Button>
                    <Button loading={true} color={ColorEnum.line}>按钮Button</Button>
                </Layout>
            </ComponentItem>
            <ComponentItem title="输入框">
                <Layout>
                    <Input
                        placeholder="placeholder占位符"
                        controlSize={SizeEnum.sm}
                    />
                    <Input
                        insideBefore={"insideBefore"}
                        outsideBefore={"outsideBefore"}
                        insideAfter={"insideAfter"}
                        outsideAfter={"outsideAfter"}
                        placeholder="placeholder占位符"
                        controlSize={SizeEnum.sm}
                    />
                </Layout>
                <Layout>
                    <Input
                        placeholder="placeholder占位符"
                    />
                    <Input
                        insideBefore={"insideBefore"}
                        outsideBefore={"outsideBefore"}
                        insideAfter={"insideAfter"}
                        outsideAfter={"outsideAfter"}
                        placeholder="placeholder占位符"
                    />
                </Layout>
                <Layout>
                    <Input
                        placeholder="placeholder占位符"
                        controlSize={SizeEnum.lg}
                    />
                    <Input
                        insideBefore={"insideBefore"}
                        outsideBefore={"outsideBefore"}
                        insideAfter={"insideAfter"}
                        outsideAfter={"outsideAfter"}
                        placeholder="placeholder占位符"
                        controlSize={SizeEnum.lg}
                    />
                </Layout>
            </ComponentItem>
        </div>
    )
}

interface IPropsComponentItem {
    title: string
    children: JSX.Element | JSX.Element[]
}

function ComponentItem(props: IPropsComponentItem) {
    const {title, children} = props;
    return (
        <div className="ComponentItem">
            <div className="ComponentItem-header">
                {title}
            </div>
            <div className="ComponentItem-body">
                {children}
            </div>
        </div>
    )
}
