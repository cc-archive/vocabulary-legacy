import { withKnobs, select } from '@storybook/addon-knobs'
export default { title: 'Cards', decorators: [withKnobs] }

export const PostVertical = () => {
    return `
        <style>
            .card {
                width: 400px;
            }
        </style>
        <article class="card entry-post vertical">
            <header class="card-image">
                <figure class="image is-4by3">
                    <img src="http://placekitten.com/700/392" alt="Header image">
                </figure>
            </header>
            <div class="card-content with-button">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <span class="subtitle">12 Octobre 2019</span>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
                <a href="#" class="button is-primary">Read more</a>
            </div>
        </article>
    `
}

export const PostHorizontal = () => {
    return `
        <style>
            .card {
                width: 600px;
            }
        </style>
        <article class="card entry-post horizontal">
            <header class="card-image">
                <figure class="image is-4by5">
                    <img src="http://placekitten.com/486/600" alt="Header image">
                </figure>
            </header>
            <div class="card-content with-button">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <span class="subtitle">12 Octobre 2019</span>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
                <a href="#" class="button is-primary">Read more</a>
            </div>
        </article>
    `
}

export const PostVideoVertical = () => {
    return `
        <style>
            .card {
                width: 400px;
            }
        </style>
        <article class="card entry-post entry-video vertical no-border">
            <header class="card-image">
                <a href="#">
                    <figure class="image is-4by3">
                        <img src="http://placekitten.com/700/392" alt="Header image">
                    </figure>
                </a>
            </header>
            <div class="card-content">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
            </div>
        </article>
    `
}

export const PostVideoHorizontal = () => {
    return `
        <style>
            .card {
                width: 600px;
            }
        </style>
        <article class="card entry-post entry-video horizontal no-border">
            <header class="card-image">
                <a href="#">
                    <figure class="image is-4by3">
                        <img src="http://placekitten.com/700/392" alt="Header image">
                    </figure>
                </a>
            </header>
            <div class="card-content">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
            </div>
        </article>
    `
}

export const PostVideoLarge = () => {
    return `
        <style>
            .card {
                width: 100%;
            }
        </style>
        <article class="card entry-post entry-video horizontal large no-border">
            <header class="card-image">
                <a href="#">
                    <figure class="image is-5by4">
                        <img src="http://placekitten.com/700/392" alt="Header image">
                    </figure>
                </a>
            </header>
            <div class="card-content">
                <h1 class="card-title"><a href="#">This is a longer title for main content</a></h1>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
            </div>
        </article>
    `
}

export const PostEventWide = () => {
    return `
        <style>
            .card {
                width: 600px;
            }
        </style>
        <article class="card entry-post entry-event horizontal">
            <header class="card-header">
                <div class="card-date">
                    <span class="month">September</span>
                    <span class="day">05</span>
                    <span class="year">2050</span>
                </div>
            </header>
            <div class="card-content">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
                <a href="#" class="read-more">Read more</a>
            </div>
        </article>
    `
}

export const PostEventNarrow = () => {
    return `
        <style>
            .card {
                width: 350px;
            }
        </style>
        <article class="card entry-post entry-event horizontal">
            <header class="card-header">
                <div class="card-date">
                    <span class="month">September</span>
                    <span class="day">05</span>
                    <span class="year">2050</span>
                </div>
            </header>
            <div class="card-content">
                <h4 class="card-title"><a href="#">This is a title</a></h4>
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
                <a href="#" class="read-more">Read more</a>
            </div>
        </article>
    `
}

export const PostStatistic = () => {
    return `
        <style>
            .card {
                width: 600px;
            }
        </style>
        <article class="card entry-post entry-statistic horizontal no-border">
            <header class="card-header">
                <div class="card-statistic">
                    <span class="number">600+</span>
                    <span class="caption">Lorem ipsum</span>
                </div>
            </header>
            <div class="card-content">
                <div class="content">
                    Description metus ligula pharetra litora class massa viverra, facilisis cum aenean hendrerit eget magnis convallis.
                </div>
                <a href="#" class="read-more">Read more</a>
            </div>
        </article>
    `
}

export const PostQuote = () => {
    return `
        <style>
            .card {
                width: 600px;
            }
        </style>
        <article class="card entry-post entry-quote horizontal no-border">
            <header class="card-image">
                <figure class="image is-1by1">
                    <img src="http://placekitten.com/182/182" alt="Header image">
                </figure>
            </header>
            <div class="card-content">
                <span class="quote"></span>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat viverra in tellus etiam tellus sed ultrices donec dapibus. Lacus risus et, ut tortor eros id et sollicitudin. Feugiat sit faucibus urna.
                    <div class="quote-author">
                        <strong class="title"> Lorem ipsum dolor sit.</strong>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    </div>
                </div>
            </div>
        </article>
    `
}

export const ImageTop = () => {
    return `
        <style>
            .card {
                width: 340px;
            }
        </style>
        <article class="card entry-post entry-image vertical">
            <header class="card-image">
                <a href="#">
                    <figure class="image is-4by5">
                        <img src="http://placekitten.com/350/370" alt="Header image">
                    </figure>
                </a>
            </header>
            <div class="card-content">
                <h4 class="card-title"><a href="#">This is a label</a></h4>
                <span class="subtitle">This is a short description</span>
            </div>
        </article>
    `
}

export const Link = () => {
    const Brands = {
        Blue: 'blue',
        Forest: 'forest',
        Gold: 'gold',
        Orange: 'orange',
        Tomato: 'tomato',
        Turquoise: 'turquoise'
    }
    const brands = select('Brand', Brands, Brands.Tomato)
    return `
        <style>
            .card {
                width: 400px;
            }
        </style>
        <article class="card entry-post link no-border">
            <a href="#" class="has-background-${brands}">
                <span class="card-content has-bottom-link">
                    <h2 class="card-title">This is a Title of a page or section</h2>
                    <span class="content">Description ultrices elementum metus ligula pharetra litora class massa.</span>
                    <span class="link-arrow">Loren ipsum dolor</span>
                </span>
            </a>
        </article>
    `
}

export const LinkBorder = () => {
    return `
        <style>
            .card {
                width: 400px;
            }
        </style>
        <article class="card entry-post link">
            <a href="#">
                <span class="card-content has-bottom-link">
                    <h2 class="card-title">This is a Title of a page or section</h2>
                    <span class="content">Description ultrices elementum metus ligula pharetra litora class massa.</span>
                    <span class="link-arrow">Loren ipsum dolor</span>
                </span>
            </a>
        </article>
    `
}