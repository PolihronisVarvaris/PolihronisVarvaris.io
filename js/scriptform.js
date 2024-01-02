const form = document.getElementById("myForm");
    const statusTxt = form.querySelector(".text-center span");

    form.onsubmit = (e) => {
        e.preventDefault();
        statusTxt.style.color = "#0D6EFD";
        statusTxt.style.display = "block";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "message.php", true);
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let response = xhr.responseText;
                if (response.indexOf("Your message has been sent") != -1) {
                    statusTxt.style.color = "green";
                } else {
                    statusTxt.style.color = "red";
                }
                statusTxt.innerText = response;
            }
        };

        let formData = new FormData(form);
        xhr.send(formData);
    };
