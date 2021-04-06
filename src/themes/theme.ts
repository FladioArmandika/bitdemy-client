interface Theme {
    [key: string]: string | number;
    name: string;
    primaryColor: string,
    secondaryColor: string
    dangerColor: string,
    warningColor: string,
    successColor: string,
    defaultIntensity: number,
    hoverIntensity: number,
    selectedIntensity: number,
}

export default Theme;
