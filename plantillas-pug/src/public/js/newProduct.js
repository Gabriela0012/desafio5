const productForm = document.getElementById('productForm');


productForm.addEventListener('submit',event =>{
  event.preventDefault();
  console.log('holasssss')
  const formData = new FormData(productForm);
  console.log(formData);
  console.log("hola")
  fetch('/api/products',{
    method: 'POST',
    body: formData
  }).then(result =>result.json()).then(json => console.log(json));

})
console.log("fin")