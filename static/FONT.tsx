export enum FONTSIZE {
    HEADING,
    SUB_HEADING,
    TOP_BAR_TITLE,
    PARAGRAPH,
    TITLE,
    SUBTITLE
}

export const getSIZE = (props: FONTSIZE) => {
    //const size = props;
    return FONTSIZE[props]
  };