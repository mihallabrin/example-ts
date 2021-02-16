document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const el: HTMLDivElement | null = document.querySelector('.example');

    el ? el.innerText = 'not example' : null;
  }
};
