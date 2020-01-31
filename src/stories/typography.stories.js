import { withKnobs, number, select } from '@storybook/addon-knobs';

export default { title: 'Typography', decorators: [withKnobs] };

const generateKnob = () => {
    const defaultValue = 1;
    const options = {
        range: true,
        min: 1,
        max: 6,
        step: 1,
    };
    return number('Heading Size', defaultValue, options);
}


export const HeadingAs = () => {
    const headingSize = generateKnob();
    return `<h${headingSize}>This is a text</h${headingSize}>`;
};

export const HeadingBs = () => {
    const headingSize = generateKnob();
    return `<h${headingSize} class="b-heading">This is a text</h${headingSize}>`;
};

export const BodyText = () => {
    const FontSize = {
        Normal: 'text-normal',
        Small: 'text-small',
        Big: 'text-big',
        Bigger: 'text-bigger',
    };
      
    const fontSize = select('FontSize', FontSize, FontSize.Normal);
    return `<p class="${fontSize}">This is a text</p>`;
};

BodyText.story = { name: 'Body Text' };

export const Value = () => '<p class="value">000</p>'