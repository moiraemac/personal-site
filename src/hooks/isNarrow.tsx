import useDimensions from "./useDimensions"

const useIsNarrow = (minWidth: number): boolean => {
    const {width} = useDimensions();
    return width < minWidth;
};
export default useIsNarrow;
