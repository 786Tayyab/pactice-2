let clickCount = 0;

document.getElementById('addToCartBtn').addEventListener('click', () => 
{
    clickCount++;
    const messageContainer = document.getElementById('messageContainer');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = `Your product is added to cart. (${clickCount})`;

    messageContainer.appendChild(message);

    setTimeout(() => {
        message.classList.add('hide');
        setTimeout(() => 
        {
            messageContainer.removeChild(message);
        }, 500);
    }, 3000);
});


let clickCounta = 0;

document.getElementById('addToCartBtna').addEventListener('click', () => 
{
    clickCounta++;
    const messageContainera = document.getElementById('messageContainera');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = `Your product is added to cart. (${clickCounta})`;

    messageContainera.appendChild(message);

    setTimeout(() => {
        message.classList.add('hide');
        setTimeout(() => 
        {
            messageContainera.removeChild(message);
        }, 500);
    }, 3000);
});


let clickCounts = 0;

document.getElementById('addToCartBtns').addEventListener('click', () => 
{
    clickCounts++;
    const messageContainers = document.getElementById('messageContainers');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = `Your product is added to cart. (${clickCounts})`;

    messageContainers.appendChild(message);

    setTimeout(() => {
        message.classList.add('hide');
        setTimeout(() => 
        {
            messageContainers.removeChild(message);
        }, 500);
    }, 3000);
});


let clickCountd = 0;

document.getElementById('addToCartBtnd').addEventListener('click', () => 
{
    clickCountd++;
    const messageContainer = document.getElementById('messageContainer');
    const message = document.createElement('div');
    message.className = 'message';
    message.innerText = `Your product is added to cart. (${clickCountd})`;

    messageContainer.appendChild(message);

    setTimeout(() => {
        message.classList.add('hide');
        setTimeout(() => 
        {
            messageContainer.removeChild(message);
        }, 500);
    }, 3000);
});
