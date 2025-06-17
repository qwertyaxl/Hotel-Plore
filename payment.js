// Payment method selection
const paymentOptions = document.querySelectorAll('.payment-option');

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        const radio = option.querySelector('input[type="radio"]');
        const groupName = radio.name;
        
        // Remove selected class from all options in the same group
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(input => {
            input.closest('.payment-option').classList.remove('selected');
        });
        
        // Add selected class to clicked option
        option.classList.add('selected');
        radio.checked = true;
    });
});

// Confirm button interaction
const confirmButton = document.querySelector('.confirm-button');

confirmButton.addEventListener('click', () => {
    const selectedCard = document.querySelector('input[name="card"]:checked');
    const selectedWallet = document.querySelector('input[name="wallet"]:checked');
    
    let paymentMethod = '';
    if (selectedCard) {
        paymentMethod = selectedCard.nextElementSibling.textContent;
    } else if (selectedWallet) {
        paymentMethod = selectedWallet.nextElementSibling.textContent;
    }
    
    if (paymentMethod) {
        alert(`Payment confirmed with ${paymentMethod}!`);
    } else {
        alert('Please select a payment method first.');
    }
});

// Smooth entrance animation
window.addEventListener('load', () => {
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');
    
    leftSection.style.opacity = '0';
    leftSection.style.transform = 'translateX(-20px)';
    rightSection.style.opacity = '0';
    rightSection.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        leftSection.style.transition = 'all 0.6s ease';
        rightSection.style.transition = 'all 0.6s ease';
        leftSection.style.opacity = '1';
        leftSection.style.transform = 'translateX(0)';
        rightSection.style.opacity = '1';
        rightSection.style.transform = 'translateX(0)';
    }, 100);
});

// Hover effects for payment options
paymentOptions.forEach(option => {
    option.addEventListener('mouseenter', () => {
        if (!option.classList.contains('selected')) {
            option.style.transform = 'translateY(-2px)';
        }
    });
    
    option.addEventListener('mouseleave', () => {
        if (!option.classList.contains('selected')) {
            option.style.transform = 'translateY(0)';
        }
    });
});