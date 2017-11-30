// $(document).ready(function() {
//   let getConvoys = new Promise((resolve, reject) => {
//     fetch('http://cunning-convoys.azurewebsites.net/api/convoys').then((response) => {
//       return response.json();
//     })
//       .then((convoys) => {
//         let currentConvoys = localStorage.getItem('convoys');
//         if (currentConvoys !== null) {
//           currentConvoys = JSON.parse(localStorage.getItem('convoys'));
//           currentConvoys.concat(convoys);
//         }
//         localStorage.setItem('convoys', JSON.stringify(currentConvoys));
//         resolve(currentConvoys);
//       })
//       .catch(function(error) { console.log(error); });
//
//   });
//
// });