// Проверяем, установлен ли MetaMask
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask установлен!');
    const web3 = new Web3(window.ethereum);

    // Находим элементы на странице
    const connectButton = document.getElementById('connectButton');
    const accountInfo = document.getElementById('accountInfo');

    // Функция для подключения MetaMask
    async function connectMetaMask() {
        try {
            // Запрашиваем доступ к аккаунту
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Подключенный аккаунт:', accounts[0]);
            // Показываем адрес аккаунта на странице
            accountInfo.textContent = `Подключенный аккаунт: ${accounts[0]}`;
        } catch (error) {
            console.error('Ошибка подключения:', error);
            accountInfo.textContent = 'Ошибка подключения к MetaMask.';
        }
    }

    // Вешаем обработчик на кнопку
    connectButton.addEventListener('click', connectMetaMask);
} else {
    console.error('MetaMask не установлен!');
    document.getElementById('accountInfo').textContent = 'MetaMask не установлен. Установите MetaMask для продолжения.';
}
