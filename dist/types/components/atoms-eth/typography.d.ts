/// <reference types="react" />
import * as CSS from "csstype";
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
export declare const H1: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
export declare const H2: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
export declare const H3: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TextStyleProps, object>;
