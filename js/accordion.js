var headingRows = document.querySelectorAll('.accordion--heading-row');

document.addEventListener('DOMContentLoaded', function () {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = headingRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var row = _step.value;
      addClickAction(row);
    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
});

function addClickAction(actionTrigger) {var

  parentNode =

  actionTrigger.parentNode,accordionItemBody = actionTrigger.nextElementSibling;

  actionTrigger.addEventListener('click', function () {var
    itemBodyHeight = accordionItemBody.children[0].offsetHeight;

    var tweenProps = {
      targets: accordionItemBody,
      easing: 'easeOutCirc',
      duration: '400ms' };


    parentNode.classList.contains('drawer-open') ?
    tweenProps.height = 0 :
    tweenProps.height = itemBodyHeight;

    anime(tweenProps);

    parentNode.classList.toggle('drawer-open');
  });
}