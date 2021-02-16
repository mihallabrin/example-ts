import ClassA from './models/ClassA';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const el: HTMLDivElement | null = document.querySelector('.example');
    const a = new ClassA(null);

    el ? ((el.innerText = a.hello), el.classList.add('test')) : null;
  }
};
