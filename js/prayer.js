// prayer.js - Prayer Request Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    const prayerForm = document.getElementById('prayerForm');
    
    if(prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const prayerRequest = document.getElementById('prayerRequest');
            const humanCheck = document.getElementById('humanCheck');
            
            if(prayerRequest.value.trim() === '') {
                alert('Please enter your prayer request');
                prayerRequest.focus();
                return;
            }
            
            if(humanCheck.checked) {
                alert('Please confirm you are not a robot');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // In a real app, you would send to server here
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
                
                // Show confirmation message
                const confirmation = document.createElement('div');
                confirmation.className = 'confirmation-message';
                confirmation.innerHTML = `
                    <i class="fas fa-pray"></i>
                    <h3>Your Prayer Has Been Received</h3>
                    <p>Our team will lift up your request before the Lord. May you experience His peace and presence.</p>
                `;
                
                prayerForm.parentNode.insertBefore(confirmation, prayerForm.nextSibling);
                prayerForm.reset();
                
                // Scroll to confirmation
                window.scrollTo({
                    top: confirmation.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
                
            }, 1500);
        });
    }
});
