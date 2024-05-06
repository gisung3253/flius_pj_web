document.addEventListener("DOMContentLoaded", function() {
    var characters = ["재경기", "민재몬", "훈남박기성"];

    // 버튼 요소 가져오기
    var button = document.getElementById('pushButton');

    // 버튼 클릭 시 랜덤 캐릭터 표시 함수 호출
    button.addEventListener('click', function() {
        showRandomCharacter(characters);
    });

    // 랜덤 캐릭터 표시 함수
    function showRandomCharacter(characters) {
        // 랜덤 캐릭터 선택
        var randomIndex = Math.floor(Math.random() * characters.length);
        var randomCharacter = characters[randomIndex];

        // 문자열을 화면에 표시
        displayRandomCharacter(randomCharacter);
    }

    // 문자열을 화면에 표시하는 함수
    function displayRandomCharacter(character) {
        // 화면에 표시할 요소 선택
        var displayArea = document.getElementById('displayArea');

        // 이전에 표시된 문자열 제거
        displayArea.innerHTML = '';

        // 새로운 문자열 생성 및 삽입
        var textNode = document.createTextNode(character);
        displayArea.appendChild(textNode);
    }
});
