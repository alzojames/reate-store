// var Contact = React.createClass({
//     getInitialState: function(){
//       return {
//           personData: []
//       }
//     },
    
//     submit: function (e){
//       var self
    
//       e.preventDefault()
//       self = this
    
//       console.log(this.state);
    
//       var data = {
//         Id: this.state.name,
//         User: this.state.email,
    
//       }
    
//       $.ajax({
//         type: 'POST',
//         dataType: 'json',
//         url: 'http://localhost:8080/ui/start',
//         data: JSON.stringify({
//           Id: this.state.name,
//           User: this.state.email,
//         })
//       })
//       .done(function(response) {
//       console.log(response);
//       self.state.userData.push({'name': response.name, 'id': response.id, 'task': response.task});
//       self.setState({userData: self.state.userData});
    
//       // This is where I have the JSON response .How can I create a dynamic table from this response **strong text**and render in on UI.  //
//      } 
//      render() {
//        return(
//          <table>
//            <thead>
//               <tr>
//                  <th>Name</th>
//                  <th>ID</th>
//                  <th>Task</th>
//               </tr>
//            </thead>
//            <tbody>
//            {this.state.userData.map((data, key) => {
//               return (
//               <tr key={key}>
//                 <td>{data.name}</td>
//                 <td>{data.id}</td>
//                 <td>{data.task}</td>
//               </tr>
//               )
//            })}
//            </tbody>
//          </table>
//        ) 
//      }