  function countChars() {
        var box = document.getElementById('messageBox');
        var count = document.getElementById('charCount');
        var total = box.value.length;
        var remaining = 200 - total;
        
        count.innerHTML = total + '/200 characters (' + remaining + ' remaining)';
        
        if (total >= 200) {
            alert('MAX 200 REACHED!');
            box.value = box.value.substring(0, 200);
            count.innerHTML = '200/200 characters (0 remaining)';
            count.style.color = 'red';
            count.style.fontWeight = 'bold';
        } else if (total > 180) {
            count.style.color = 'maroon';
        } else {
            count.style.color = 'red';
        }
    }