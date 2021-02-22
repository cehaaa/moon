const getPage = page => {
    const xhr = new XMLHttpRequest();
    const el = document.getElementById('screen')

    xhr.open("GET",page,true)
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            el.innerHTML = xhr.responseText;
        }
    }
    xhr.send()
}

getPage('home-screen.html')