import * as React from 'react';
import * as ReactDom from 'react-dom';

import './Index.sass';
import Button from "../components/button/Button";
import Layout from "../components/layout/Layout";
import {ColorEnum, SizeEnum} from "../components/definition";
import {LoginOutlined} from "@ant-design/icons/lib";

import '../components/definition/global.sass'

interface IPropsIndex {

}

function Index(props : IPropsIndex) {
    return (
        <div className="Index">
            <ComponentItem title="按钮">
                <Layout>
                    <Button size={SizeEnum.xs}>按钮</Button>
                    <Button size={SizeEnum.xs}>Button</Button>
                    <Button size={SizeEnum.xs}>按钮Button</Button>
                    <Button size={SizeEnum.xs} color={ColorEnum.primary}>按钮Button</Button>
                    <Button size={SizeEnum.xs} color={ColorEnum.line}>按钮Button</Button>
                </Layout>
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
                    <Button icon={<LoginOutlined />} size={SizeEnum.xl}>按钮</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.xl}>Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.xl}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.xl} color={ColorEnum.primary}>按钮Button</Button>
                    <Button icon={<LoginOutlined />} size={SizeEnum.xl} color={ColorEnum.line}>按钮Button</Button>
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

ReactDom.render(<Index />, document.getElementById('root'));
