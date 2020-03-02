export default { title: 'Cards' }

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