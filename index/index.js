function toggleSenha() {
    const campoSenha = document.getElementById("senha");
    const icone = document.getElementById("icone");

    if (campoSenha.type === "password") {
        campoSenha.type = "text"

        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    } else {
        campoSenha.type = "password"

        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    }
}