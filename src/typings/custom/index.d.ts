declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.webp';
declare module '*.json' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value: any;
    // @ts-ignore
    export default value;
}
