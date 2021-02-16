"use strict";
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var el = document.querySelector('.example');
        el ? el.innerText = 'not example' : null;
    }
};
//# sourceMappingURL=index.js.map