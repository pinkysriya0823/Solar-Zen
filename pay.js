const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});

var donate_link = 'https://www.paypal.me/webevasion/{amount}/';
//Init link with input amount
setTimeout(function() {
	$('.donation_wrapper > .amount_wrapper > input').trigger('change');
}, 20);
//Update link on change or input
$(document).on('change input', '.donation_wrapper > .amount_wrapper > input', function() {
	$(this).val(parseFloat($(this).val()).toFixed(2));
	$(this).parent().parent().find('> a').attr('href', donate_link.replace('{amount}', parseFloat($(this).val()).toFixed(2)));
});
//Change amount on button click
$(document).on('click', '.donation_wrapper > .single_amount_wrapper > .single_amount', function() {
	$('.donation_wrapper > .amount_wrapper > input').val(parseFloat($(this).attr('value')).toFixed(2)).trigger('change');
});