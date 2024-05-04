$(document).ready(function () {
    $('button').click(function () {
        var max = 5;
        var x = 1;
        $('.category-form').append('<div class="input-category"><input type="text"name="category-name" id="category-id" placeholder="EnterCategory Name"><div class="delete-btn"><a href=""><i class="fa-solid fa-trash"></i></a></div></div>');

        if (x < max) {
            x++;
        } else {
            alert('Only Five Category Added');
        }
        $('.delete-btn').click(function (e) {
            e.preventDefault();
            $(this).parent().remove();
        });
    });
    $('#clear-btn').click(function () {
        $('.input-category').remove();
    });
});