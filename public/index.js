import ClassA from './models/ClassA';
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var el = document.querySelector('.example');
        var a = new ClassA(null);
        el ? ((el.innerText = a.hello), el.classList.add('test')) : null;
    }
};
//# sourceMappingURL=index.js.map