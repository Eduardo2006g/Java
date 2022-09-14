
        let tamanho = 3;
        function atualizatamanho() {
            const h1 = document.querySelector("h1");
            h1.style.fontSize = `${tamanho}em`;
        }
        function aumentatitulo() {
            if (tamanho < 6) {
                tamanho += 0.5;
                atualizatamanho()
            }
        }
        function diminuititulo() {
            if (tamanho > 1) {
                tamanho -= 0.5;
                atualizatamanho();
            }
        }
