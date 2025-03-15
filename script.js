document.addEventListener("DOMContentLoaded", () => {
    carregarMemorias();
});

function adicionarMemoria() {
    const texto = document.getElementById("memoria-texto").value;
    const imagemInput = document.getElementById("memoria-imagem");
    
    if (!texto && !imagemInput.files.length) {
        alert("Por favor, adicione uma lembrança ou uma imagem.");
        return;
    }

    const memoria = {
        texto: texto,
        imagem: ""
    };

    if (imagemInput.files.length) {
        const reader = new FileReader();
        reader.onload = function (e) {
            memoria.imagem = e.target.result;
            salvarMemoria(memoria);
        };
        reader.readAsDataURL(imagemInput.files[0]);
    } else {
        salvarMemoria(memoria);
    }

    document.getElementById("memoria-texto").value = "";
    imagemInput.value = "";
}

function salvarMemoria(memoria) {
    let memorias = JSON.parse(localStorage.getItem("memorias")) || [];
    memorias.push(memoria);
    localStorage.setItem("memorias", JSON.stringify(memorias));
    carregarMemorias();
}

function carregarMemorias() {
    const memoriaContainer = document.getElementById("memoria-container");
    memoriaContainer.innerHTML = "";
    const memorias = JSON.parse(localStorage.getItem("memorias")) || [];

    memorias.forEach(memoria => {
        const div = document.createElement("div");
        div.classList.add("memoria");

        if (memoria.imagem) {
            const img = document.createElement("img");
            img.src = memoria.imagem;
            div.appendChild(img);
        }

        if (memoria.texto) {
            const p = document.createElement("p");
            p.textContent = memoria.texto;
            div.appendChild(p);
        }

        memoriaContainer.appendChild(div);
    });
}
