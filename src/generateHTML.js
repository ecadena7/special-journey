

function renderHTML({ name, id, email, school }) {
//create a for loop for the employee array
//create a card for each employee in the array
//add the cards in my html code

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Special Team Generator</title>
</head>

<body>
    <header class="p-5 mb-4 header bg-light">
        <p>My Special Journey Team</p>
    </header>

    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <h3><span class="badge bg-secondary">Employee Info</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My email is: ${email}</li>
        <li class="list-group-item">My School is: ${school}</li>
        <li class="list-group-item">My Employee ID is: ${id}</li>
      </ul>
    </div>
    
</body>
</html>
    `



}

module.exports = renderHTML;

