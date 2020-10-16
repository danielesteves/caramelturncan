/*analytics.logEvent('select_content', {
  content_type: 'image',
  content_id: 'P12453',
  items: [{ name: 'Kittens' }]
});
*/

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#doguinho_img')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);
  firebase.analytics().logEvent('select_content', {
    content_type: 'image',
    content_id: 'doguinho_img'
  });

}, false);
