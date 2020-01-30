import { withKnobs, select } from '@storybook/addon-knobs';

export default { title: 'Colors', decorators: [withKnobs] };

export const Context = () => {
    const Context = {
        Primary: 'primary',
        Info: 'info',
        Link: 'link',
        Success: 'success',
        Warning: 'warning',
        Error: 'danger',
    };
      
    const context = select('Context', Context, Context.Primary);

    return `<div class="box has-background-${context}" style="width: 300px; height: 300px;"></div>`;
};
Context.story = { name: 'Context' };

export const Brands = () => {
    const Brands = {
        Blue: 'blue',
        Forest: 'forest',
        Gold: 'gold',
        Orange: 'orange',
        Tomato: 'tomato',
        Turquoise: 'turquoise',
        DarkSlateGray: 'dark-slate-gray',
        TomatoBrighter: 'tomato-brighter',
        ForestBrighter: 'forest-brighter',
        GoldBrighter: 'gold-brighter',
    };
    
    const brands = select('Brand', Brands, Brands.Tomato);

    return `<div class="box has-background-${brands}" style="width: 300px; height: 300px;"></div>`;
};
Brands.story = { name: 'Brands' };