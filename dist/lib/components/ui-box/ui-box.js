import { styled } from "../../theme"
import {
  alignItems,
  alignSelf,
  borderColor,
  borderRadius,
  borders,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  justifySelf,
  space,
  textAlign,
  width,
  fontSize,
  minWidth,
  maxWidth,
  minHeight,
} from "styled-system"
// white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : "")};
//   word-break: ${(props) => (props.wordBreak ? props.wordBreak : "")};
const Box = styled.div`
  
  display: flex;
  position: relative;
  ${fontSize}
  ${display};
  ${width};
  ${minWidth}
  ${maxWidth}
  ${minHeight}
  ${space};
  ${flexDirection};
  ${alignSelf};
  ${justifySelf};
  ${justifyContent};
  ${alignItems};
  ${flex};
  ${color};
  ${flexWrap};
  ${textAlign};
  ${height};
  ${borders};
  ${borderRadius}
  ${borderColor}
  b {
    ${fontSize}
  }
`
export default Box
export const HomeWrapper = styled(Box)`
  min-height: 100vh;
  ${color}
`
