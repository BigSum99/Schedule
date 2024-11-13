// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        const closeModalBtns = document.querySelectorAll('.close-btn');
        const modalText = document.getElementById('modal-text');
        const confirmDeleteForm = modal.querySelector('form');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                const scheduleId = this.dataset.id;
                const scheduleTitle = this.dataset.title;
                modalText.textContent = `「${scheduleTitle}」を削除してよろしいですか？`;
                confirmDeleteForm.action = `/schedules/${scheduleId}`; // フォームのアクションを設定
                modal.style.display = 'block';
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});
