const validateFields = (form, fieldsArray) => {
  fieldsArray.forEach(field => {
    field.removeClass("input-error");
    if(field.val().trim() == "") {
      field.addClass("input-error")
    }
    
  });
  
  const errorFields = form.find(".input-error");

  return errorFields.length == 0;
}

$('.form').submit(e => {
  e.preventDefault();
  
const form = $(e.currentTarget);
const name = form.find("[name='name']");
const phone = form.find("[name='phone']");
const comment = form.find("[name='comment']");
const to = form.find("[name='to']");

const modal = $("#modal");
const modalContent = modal.find(".modal__content");

modal.removeClass("error");

const isValid = validateFields(form, [name, phone, comment, to]);


if(isValid) {
  const request = $.ajax({
    url:"https://webdev-api.loftschool.com/sendmail",
    method: "post",
    data: {
      name: name.val(),
      phone: phone.val(),
      comment: comment.val(),
      to: to.val(),
    },
    /*sucsess: data => {
      modalContent.text(data.message);
      $.fancybox.open({
        src: "#modal",
        type: "inline"
      });
    },*/
     /*error: data => {
      console.log(data);
      const message = data.responseJSON.message;
      console.log(data);
      modalContent.text(message);
      modal.addClass("error");

      $.fancybox.open({
        src: "#modal",
        type: "inline"
      });
    }*/
  });

  request.done(data => {
    modalContent.text(data.message);

  });

  request.fail(data => {
    console.log(data);
    const message = data.responseJSON.message;
    console.log(data);
    modalContent.text(message);
    modal.addClass("error");


  });

  request.always(() => {
    $.fancybox.open({
      src: "#modal",
      type: "inline"
    });
  })
 }
});

$('.js-btn-submit').click(e => {
  e.preventDefault();

  $.fancybox.close()
})