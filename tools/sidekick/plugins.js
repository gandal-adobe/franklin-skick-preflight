/* eslint-disable no-console */
const preflight = ({ detail }) => {
  const sk = detail.data;
  // your custom code from button.action goes here
  //alert('Unable to publish page. \n\nContent at <path to german content> is not yet live.  \n\nPlease publish the german content first.');

  console.log(detail);
  console.log(`preflight: ${sk}`);
  console.log(sk);
  console.log(detail);
  console.log('live url: ' + sk.status.live.url);
  console.log('location.pathname: ' + sk.location.pathname);
  console.log(window.hlx);

  // Publish
  const publishEl = document.querySelector('helix-sidekick').shadowRoot.querySelector('.publish');
  console.log(publishEl);

  const publishButton = publishEl.firstElementChild;
  console.log(publishButton);

  publishButton.click();

  //sk.hide();
};

const sk = document.querySelector('helix-sidekick');
sk.addEventListener('custom:preflight', preflight);
