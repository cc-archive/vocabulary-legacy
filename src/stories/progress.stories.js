export default { title: 'Progress' }

export const VerticalNav = () =>
  '<div class="container padding-horizontal-large padding-vertical-large has-background-white-ter">' +
	  '<div class="columns">' +
      '<div class="column is-half">' +
        '<h2 class="has-text-black is-size-4 is-uppercase has-text-weight-bold">Current state, first question</h2>' +
        '<nav class="panel">' +
          '<a class="panel-block has-background-white">' +
            '<div class="card-content">' +
              '<div class="media">' +
                '<div class="media-left">' +
                  '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">1</span>' +
                '</div>' +
                '<div class="media-content">' +
                  '<p class="title is-5 has-text-black no-padding">Step 1 name</p>' +
                  '<p class="subtitle is-6 has-text-black">Step description, indications, etc.</p>' +
                  '<div class="margin-top-extra-larger">' +
                    '<button class="button has-background-grey-lighter next-question-btn is-uppercase is-size-6 has-text-centered has-text-weight-bold is-light is-active">Next question</button>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</a>' +
          '<a class="panel-block">' +
            '<div class="card-content">' +
                '<div class="media">' +
                  '<div class="media-left">' +
                    '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">2</span>' +
                  '</div>' +
                  '<div class="media-content">' +
                    '<p class="title is-5 has-text-grey no-padding">Step 2 name</p>' +
                  '</div>' +
                '</div>' +
            '</div>' +
          '</a>' +
          '<a class="panel-block">' +
            '<div class="card-content">' +
              '<div class="media">' +
                '<div class="media-left">' +
                  '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">3</span>' +
                '</div>' +
                '<div class="media-content">' +
                    '<p class="title is-5 has-text-grey no-padding">Step 3 name</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</a>' +
          '<a class="panel-block">' +
            '<div class="card-content">' +
              '<div class="media">' +
                '<div class="media-left">' +
                  '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">4</span>' +
                '</div>' +
                '<div class="media-content">' +
                  '<p class="title is-5 has-text-grey no-padding">Step 4 name</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '</a>' +
        '</nav>' +
      '</div>' +

      '<div class="column is-half">' +
        '<h2 class="has-text-black is-size-4 is-uppercase has-text-weight-bold">Current state, Second question</h2>' +
          '<nav class="panel">' +
            '<a class="panel-block has-background-white">' +
              '<div class="card-content">' +
                '<div class="media">' +
                  '<div class="media-left">' +
                    '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">1</span>' +
                  '</div>' +
                  '<div class="media-content">' +
                    '<p class="title is-5 has-text-black no-padding">Step 1 name</p>' +
                    '<p class="subtitle is-6 has-text-black">Step description, indications, etc.</p>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
            '<a class="panel-block has-background-white">' +
              '<div class="card-content">' +
                '<div class="media">' +
                  '<div class="media-left">' +
                    '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">2</span>' +
                  '</div>' +
                  '<div class="media-content">' +
                    '<p class="title is-5 has-text-black no-padding">Step 2 name</p>' +
                    '<p class="subtitle has-text-black is-6">Step content.</p>' +
                    '<div class="margin-top-extra-larger">' +
                      '<button class="button margin-right-small is-uppercase next-question-btn is-outlined is-size-6 has-text-centered has-text-weight-bold">Back</button>' +
                      '<button class="button is-uppercase next-question-btn is-info has-text-white is-size-6 has-text-centered has-text-weight-bold">Next question</button>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
            '<a class="panel-block">' +
              '<div class="card-content">' +
                '<div class="media">' +
                  '<div class="media-left">' +
                    '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">3</span>' +
                  '</div>' +
                  '<div class="media-content">' +
                    '<p class="title is-5 has-text-grey no-padding">Step 3 name</p>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
            '<a class="panel-block">' +
              '<div class="card-content">' +
                '<div class="media">' +
                  '<div class="media-left">' +
                  '  <span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">4</span>' +
                  '</div>' +
                  '<div class="media-content">' +
                    '<p class="title is-5 has-text-grey no-padding">Step 4 name</p>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
        '</nav>' +
	    '</div>' +
	  '</div>' +

  '<div class="columns padding-top-normal">' +

    '<div class="column is-half">' +
    '<h2 class="has-text-black is-size-4 is-uppercase has-text-weight-bold">First question hover</h2>' +
      '<nav class="panel">' +
        '<a class="panel-block has-background-white firstQuestionHover">' +
          '<div class="card-content">' +
            '<div class="media">' +
              '<div class="media-left">' +
                '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">1</span>' +
              '</div>' +
              '<div class="media-content">' +
                '<p class="title is-5 has-text-black no-padding">Step 1 name</p>' +
                '<p class="subtitle is-6 has-text-black">Information selected by the user.</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +

        '<a class="panel-block has-background-white">' +
          '<div class="card-content">' +
            '<div class="media">' +
              '<div class="media-left">' +
                '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">2</span>' +
              '</div>' +
              '<div class="media-content">' +
                '<p class="title is-5 has-text-black no-padding">Step 2 name</p>' +
                '<p class="subtitle has-text-black is-6">Step description, indications, etc.</p>' +
                '<div class="margin-top-extra-larger">' +
                  '<button class="button margin-right-small is-uppercase next-question-btn is-outlined is-size-6 has-text-centered has-text-weight-bold">Back</button>' +
                  '<button class="button is-uppercase next-question-btn is-info has-text-white is-size-6 has-text-centered has-text-weight-bold">Next question</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +
        '<a class="panel-block">' +
          '<div class="card-content">' +
            '<div class="media">' +
              '<div class="media-left">' +
                '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">3</span>' +
              '</div>' +
              '<div class="media-content">' +
                '<p class="title is-5 has-text-grey no-padding">Step 3 name</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +

        '<a class="panel-block">' +
          '<div class="card-content">' +
            '<div class="media">' +
              '<div class="media-left">' +
                '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">4</span>' +
              '</div>' +
              '<div class="media-content">' +
                '<p class="title is-5 has-text-grey no-padding">Step 4 name</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</a>' +
      '</nav>' +
    '</div>' +

  '<div class="column is-half">' +
    '<h2 class="has-text-black is-size-4 is-uppercase has-text-weight-bold">First question Error</h2>' +
    '<nav class="panel">' +
      '<a class="panel-block has-background-white">' +
        '<div class="card-content">' +
          '<div class="media">' +
            '<div class="media-left">' +
              '<span class="tag is-primary has-text-white is-size-6 has-text-weight-bold is-rounded">1</span>' +
            '</div>' +
            '<div class="media-content">' +
              '<p class="title is-5 has-text-primary no-padding">Error message</p>' +
              '<p class="subtitle is-6 has-text-primary">Description of the error message.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</a>' +

      '<a class="panel-block has-background-white">' +
        '<div class="card-content">' +
          '<div class="media">' +
            '<div class="media-left">' +
              '<span class="tag is-info has-text-white is-size-6 has-text-weight-bold is-rounded">2</span>' +
            '</div>' +
            '<div class="media-content">' +
              '<p class="title is-5 has-text-black no-padding">Step 2 name</p>' +
              '<p class="subtitle has-text-black is-6">Step description, indications, etc.</p>' +
              '<div class="margin-top-extra-larger">' +
                '<button class="button margin-right-small is-uppercase next-question-btn is-outlined is-size-6 has-text-centered has-text-weight-bold">Back</button>' +
                '<button class="button is-uppercase next-question-btn is-info has-text-white is-size-6 has-text-centered has-text-weight-bold">Next question</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</a>' +

      '<a class="panel-block">' +
        '<div class="card-content">' +
            '<div class="media">' +
              '<div class="media-left">' +
                '<span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">3</span>' +
              '</div>' +
              '<div class="media-content">' +
                '<p class="title is-5 has-text-grey no-padding">Step 3 name</p>' +
              '</div>' +
            '</div>' +
        '</div>' +
      '</a>' +

      '<a class="panel-block">' +
        '<div class="card-content">' +
          '<div class="media">' +
            '<div class="media-left">' +
            '  <span class="tag has-background-grey-light has-text-dark is-size-6 has-text-weight-bold is-rounded">4</span>' +
            '</div>' +
            '<div class="media-content">' +
              '<p class="title is-5 has-text-grey no-padding">Step 4 name</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</a>' +

    '</nav>' +
  '</div>' +

  '</div>' +
  '</div>'
