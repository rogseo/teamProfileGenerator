const Manager = require("./Manager");

function generateHTML(employee) {
    var html = `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1,
          shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
        <title>Your Team</title>
      </head>
    
      <body>
        <header>
          <div class="jumbotron jumbotron-fluid custom-jumbotron">
            <div class="container">
              <h1 class="display-4"><strong>Your Team</strong></h1>
            </div>
          </div>
        </header>
        <main class="row justify-content-center">
          <div class="col-9 row row-cols-3 justify-content-center ml-4 align-items-center"> `;
    //create card sections
    for (let i = 0; i < employee.length; i++) {
        var role = employee[i].getRole();
        switch (role) {
            case 'Manager':
                html += ` 
                <section class="col mb-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-header custom-header">
                    <h1>${employee[i].name}</h1>
                    <h2><iconify-icon inline icon="bx:coffee"></iconify-icon>${employee[i].getRole()}</h2>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush custom-list">
                      <li class="list-group-item">ID : ${employee[i].id}</li>
                      <li class="list-group-item">Email : <a href="mailto:${employee[i].email}" target="_blank">${employee[i].email}</a></li>
                      <li class="list-group-item">Office Number : ${employee[i].officeNumber}</li>
                    </ul>
                  </div>        
                </div>
              </section>
              `; break;

            case 'Engineer':
                html += ` 
                <section class="col mb-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-header custom-header">
                    <h1>${employee[i].name}</h1>
                    <h2><iconify-icon inline icon="iconoir:github"></iconify-icon>${employee[i].getRole()}</h2>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush custom-list">
                      <li class="list-group-item">ID : ${employee[i].id}</li>
                      <li class="list-group-item">Email : <a href="mailto:${employee[i].email}" target="_blank">${employee[i].email}</a></li>
                      <li class="list-group-item">Github : <a href="https://www.github.com/${employee[i].github}" target="_blank">${employee[i].github}</a></li>
                    </ul>
                  </div>        
                </div>
              </section>`; break;

            case 'Intern':
                html += `
                <section class="col mb-4">
                <div class="card" style="width: 18rem;">
                  <div class="card-header custom-header">
                    <h1>${employee[i].name}</h1>
                    <h2><iconify-icon inline icon="ic:outline-school"></iconify-icon>${employee[i].getRole()}</h2>
                
                    
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush custom-list">
                      <li class="list-group-item">ID : ${employee[i].id}</li>
                      <li class="list-group-item">Email : <a href="mailto:${employee[i].email}" target="_blank">${employee[i].email}</a></li>
                      <li class="list-group-item">School : ${employee[i].school}</li>
                    </ul>
                  </div>        
                </div>
              </section>`; break;

        }

    }

    html +=

        `</div>
        </main>

        <script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
          crossorigin="anonymous"></script>
    </html>`;


    return html;
}

module.exports = generateHTML;