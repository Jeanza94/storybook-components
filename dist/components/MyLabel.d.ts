/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * this is the content of the span
    */
    label: string;
    /**
    * this is the size of the span
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * do you want all the letter in capital words?
    */
    allCaps?: boolean;
    /**
    * is your text primary, secondary or tertiary?
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * which is the color of your text
    */
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
