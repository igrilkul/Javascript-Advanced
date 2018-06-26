function domSearch(selector,check) {
    // TODO

    let content = $(selector);
    content.addClass('items-control')
        .append($('<div>')
            .addClass('add-controls')
            .append($(`<label>`)
                .text('Enter text: ')
                .append('<input>'))
            .append($('<a href="#">').addClass('button')
                .css('display','inline-block').text('Add')
                .on('click',function (ev)
            {
                ev.preventDefault();
                let value = $('.add-controls input');
                let ul = $('.items-list');

                if(value.val() !== '')
                {
                    ul.append($('<li>')
                        .append($('<a href="#">').addClass('button').text('X')
                            .on('click',function ()
                            {
                                 $(this).parent().remove()
                            }
                            ))
                        .append($('<strong>').text(value.val())))
                }
            }
            )))
        .append($('<div>').addClass('search-controls')
            .append($('<label>').text('Search:').append('<input>')
                    .on('change',function ()
                    {
                        let value = $('search-controls');
                        let li = $('.items-list li').toArray();
                        li.map(p=>$(p).css('display','none'));

                        if(sensitive)
                        {
                            let matches = $(`.items-list li:contains(${value.val()})`).toArray();
                            matches.map(m=>$(m).css('display',''));
                        }
                        else
                        {
                            let matches = $(`.items-list li:contains(${value.val()})`).toArray();
                            matches.map(m => $(m).css('display', ''))
                        }
                    })
                ))

        .append($('<div>').addClass('result-controls')
            .append($('<ul>').addClass('items-list')
                ))


}
