import * as React from 'react'
/** Declaration file generated by dts-gen */

export function addid(a: any, ...args: any[]): any;

export function removeid(a: any, ...args: any[]): any;

export namespace addid {
    const prototype: {
    };

}

export namespace removeid {
    const prototype: {
    };

}

declare type coordinateType = {
    x: number
    y: number
    width: number
    height: number
}

export declare type CropsProps = {
    src: string
    width?: number
    height?: number
    coordinates: coordinateType[]
    onChange?: any,
    onDelete?: any,
    onDraw?: any
}

export default class MultiCrops extends React.Component<CropsProps> {

    drawingIndex: number
    pointA: any
    id: any
    static propTypes : {
        src: string,
        width?: number,
        height?: number,
        coordinates: any,
        onChange?: any,
        onDelete?: any,
        onDraw?: any
    }

    renderCrops(props: any): any
    getCursorPosition(e: any): void
    handleMouseMove(e: any): void
    handlMouseUp(): void
    render(): JSX.Element
}
