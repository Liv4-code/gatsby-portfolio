import * as React from "react";
import { Link } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import { Themed } from "@theme-ui/mdx";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";

const NotFound = () => (
    <Layout>
        <Parallax pages={1}>
            <div>
                <Divider speed={0.2} offset={0} factor={1}>
                    <Svg
                        icon="circle"
                        hiddenMobile
                        width={24}
                        color="icon_darker"
                        left="5%"
                        top="70%"
                    />
                    <Svg
                        icon="circle"
                        width={6}
                        color="icon_darkest"
                        left="4%"
                        top="20%"
                    />
                    <Svg
                        icon="circle"
                        width={12}
                        color="icon_darkest"
                        left="50%"
                        top="60%"
                    />
                    <Svg
                        icon="circle"
                        width={64}
                        color="icon_darker"
                        left="95%"
                        top="5%"
                    />
                    <Svg
                        icon="hexa"
                        width={16}
                        stroke
                        color="icon_darker"
                        left="10%"
                        top="50%"
                    />
                    <Svg
                        icon="hexa"
                        width={8}
                        stroke
                        color="icon_darker"
                        left="80%"
                        top="70%"
                    />
                </Divider>
                <Content
                    sx={{ variant: `texts.bigger` }}
                    speed={0.4}
                    offset={0}
                    factor={1}
                >
                    <Inner>
                        <Themed.h1>404 - Page not found</Themed.h1>
                        <Themed.p>
                            Go back to <Link to="/">homepage</Link>.
                        </Themed.p>
                    </Inner>
                </Content>
            </div>
        </Parallax>
    </Layout>
);

export default NotFound;

export const Head = () => <Seo title="404 - Not Found" />;
