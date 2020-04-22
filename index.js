'use strict';

//Add an item to the list
$('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    let list = $(this).find('input').val();
    $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${list}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    )
})

$('.shopping-list').on('click', function(event) {
    let buttonID = $(event.target).closest('button').find('span').html();
    if (buttonID === 'check') {
        console.log($(event.currentTarget)
                        .closest('span')
                        .html());
        $(event.target)
            .closest('div')
            .siblings('span')
            //.css("background-color", "green");
            .toggleClass('shopping-item__checked');
    }

    if (buttonID === 'delete') {
        $(event.target).closest('li').remove();
        console.log('clicked delete');
    }
})