function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
   // errorsOutputElement.textContent = ''; 에러 메세지 제거 코드
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    // trim()은 공백을 제거해주는 코드이다. '    플레이어   '  => '플레이어' 이런식으로 변환되게 하는 코드
    event.target.firstElementChild.classList.add('error');

    if (!enteredPlayername) { // enteredPlayername === '' 플레이어의 이름이 비어있는지 확인 함
        errorsOutputElement.textContent = 'Please enter a valid name!!!!!';
        return;
    }

}