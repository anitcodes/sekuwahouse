// load navbar
fetch('navbar.html')
      .then(res => res.text())
      .then(data => document.getElementById('navbar').innerHTML = data);

// load footer
fetch('footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer').innerHTML = data);



    