const handlerIsActive = (item) => {
    document.querySelectorAll('.filter button')
    .forEach(btn => btn.classList.remove('active'));
    item.classList.add('active');
}

export default handlerIsActive;