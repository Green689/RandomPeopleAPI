var contenido = document.querySelector('#contenido')
        function traer() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last}</p><br>
                <p>Phone: ${data.results['0'].phone}</p><br>
                <p>Correo: ${data.results['0'].email}</p>
                `
            })
        }
        function traerM() {
            fetch('https://randomuser.me/api/?gender=male')
            .then(res => res.json())
            .then(data => {
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last}</p><br>
                <p>Phone: ${data.results['0'].phone}</p><br>
                <p>Edad: ${data.results['0'].dob.age}</p>
                `
            })
        }
        function traerF() {
            fetch('https://randomuser.me/api/?gender=female')
            .then(res => res.json())
            .then(data => {
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                <p>Nombre: ${data.results['0'].name.first} ${data.results['0'].name.last}</p><br>
                <p>Phone: ${data.results['0'].phone}</p><br>
                <p>Fecha de nacimiento: ${data.results['0'].dob.date}</p>
                `
            })
        }
