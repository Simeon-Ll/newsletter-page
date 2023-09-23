import './style.css'


let user
const subscriptionPage = `
<div id="app">
      <div class="content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers recieving monthly updates on</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>

        <form action="" method="get" id="myForm">
          <div class="email-info">
            <h3>Email address</h3>
            <h3 id="error"></h3>
          </div>
          <input type="email" name="" id="email" placeholder="email@gmail.com">

          <button type="reset" id="submit"><h3>Subscribe to monthly newsletter</h3></button>
            
          
        </form>
    </div>
    <div class="image">
      
    </div>
    </div>`
    

document.querySelector('body').innerHTML = subscriptionPage



document.getElementById('submit').addEventListener(
  'click', function(){validate()}
)

const validate = () =>{
    let error = ''
    user = document.getElementById('email').value
    

    if ((!user.includes('@') || !user.includes('.com')) && user != '') {
      error = 'Enter valid email'
      document.getElementById('error').innerText = error
    }else if(user == ''){
      error = 'Enter an email address'
      document.getElementById('error').innerText = error
    }else{
      changePage()
      
    }

    
}





function changePage() {
  const messagePage = `
      <div class="wrapper">

      <img src="assets/images/icon-list.svg" alt="">

      <h1>Thanks for subscribing!</h1>

      <p>A confirmation email has been sent to <b>${user}</b>.
        Please open it and click the button inside to confirm your subscription
      </p>

      <button type="submit" id="reset" onclick='function reset(){location.reload()} '><h3>Dismiss message</h3></button>


      </div>
      `
  document.querySelector('body').innerHTML = messagePage
}






  


