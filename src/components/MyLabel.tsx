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
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
    * which is the color of your text 
    */
    fontColor?: string,

    backgroundColor?: string
}

export const MyLabel = ({
    label = 'no label!!',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor = 'black',
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
            {allCaps ? label.toUpperCase() : label}
        </span >
    )
}
