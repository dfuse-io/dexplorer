import * as CSS from "csstype";
import * as React from "react";
export interface TextStyleProps {
    size?: "small" | "normal" | "large";
    variant?: "condensed" | "monospace";
    hoverable?: boolean;
    bg?: string;
    color?: string;
    p?: string;
    px?: string;
    py?: string;
    pl?: string;
    pr?: string;
    m?: string;
    mx?: string;
    my?: string;
    ml?: string;
    mr?: string;
    position?: CSS.PositionProperty;
    display?: CSS.DisplayProperty;
    lineHeight?: string;
    fontSize?: string;
    fontWeight?: number | string;
    whiteSpace?: CSS.WhiteSpaceProperty;
    width?: string;
    height?: string;
    minHeight?: string;
    minWidth?: string;
    maxHeight?: string;
    maxWidth?: string;
    flex?: string;
    alignItems?: CSS.AlignItemsProperty;
    alignSelf?: CSS.AlignSelfProperty;
    justifyContent?: CSS.JustifyContentProperty;
    hover?: string;
}
export declare const textStyle: (props: TextStyleProps & React.HTMLAttributes<HTMLElement>) => string;
export declare const H1: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
export declare const H2: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
export declare const H3: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
export declare const Text: React.ComponentType<any>;
export declare type TextProps = React.ComponentProps<typeof Text>;
export declare const HoverableText: React.ComponentType<any>;
export declare const HoverableTextNoHighlight: React.ComponentType<any>;
export declare const Ellipsis: React.ComponentType<any>;
export declare const CondensedBold: React.ComponentType<any>;
export declare const BigTitle: React.ComponentType<any>;
export declare const Title: React.ComponentType<any>;
export declare const SubTitle: React.ComponentType<any>;
export interface TextLinkProps {
    whiteSpace?: string;
    lineHeight?: string;
    download?: string;
    to: string;
    fontSize?: any;
    fontFamily?: any;
    fontWeight?: any;
    style?: any;
    pt?: any;
    pb?: any;
    pr?: any;
    p?: any;
    textAlign?: any;
    color?: any;
    pl?: any;
    width?: any;
    mr?: any;
    ml?: any;
    my?: any;
    mx?: any;
}
export declare const LinkStyledText: React.ComponentType<any>;
export declare const StyledLink: React.ComponentType<any>;
export declare const TextLinkLight: React.SFC<TextLinkProps>;
export declare const TextLink: React.SFC<TextLinkProps>;
export declare const ExternalTextLink: React.SFC<TextLinkProps>;
export declare const ExternalTextLinkLight: React.SFC<TextLinkProps>;
export declare class KeyValueFormatEllipsis extends React.Component<{
    content: string;
}> {
    render(): JSX.Element;
}
export declare const MonospaceTextLink: React.SFC<TextLinkProps>;
export declare const MonospaceText: React.ComponentType<any>;
export declare const MonospaceTextWrap: React.ComponentType<any>;
export declare const WrappingText: React.ComponentType<any>;
export declare const WrappingMonospaceText: React.ComponentType<any>;
