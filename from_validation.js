function validate() {
    var un = document.getElementById("username").value
    var unp = /^[a-zA-z]+$/
    if (un=="")
        {
            document.getElementById("msg").innerHTML = "Enter User Name...!"
            return false
        }
    
    if (un.match(unp))
        true
    else
        {
            document.getElementById("msg").innerHTML = "UserNmae should contain Alphabets Only"
            return false
        }
    
    if (un.length<3)
        {
            document.getElementById("msg").innerHTML = "UserName should have minimum of 3 characters"
            return false
        }
    
        if (un.length>7)
        {
            document.getElementById("msg").innerHTML = "UserName should have maximum of 7 characters"
            return false
        }

    var pn = document.getElementById("phonenumber").value
    var pnp = /^[6-9]{1}[0-9]{9}$/
    if(pn=="")
    {
        document.getElementById("msg1").innerHTML = "Enter Phone Number"
        return false
    }

    if(pn.match(pnp))
        true
    else
    {
        document.getElementById("msg1").innerHTML = "Invalid Phone Number"
        return false
    }

    var em = document.getElementById("email").value
    var emp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(em=="")
    {
        document.getElementById("msg2").innerHTML = "Enter Email ID"
        return false
    }

    if(em.match(emp))
        true
    else
    {
        document.getElementById("msg2").innerHTML = "Invalid email"
        return false
    }

   var pw = document.getElementById("password").value
   var pwp = /^[A-Z][a-z0-9]{5,15}[!@#$%^&*]$/


   if(pw=="")
   {
    document.getElementById("msg3").innerHTML = "Enter Password"
    return false
   }

   if(pw.match(pwp))
    true
   else
   {
    document.getElementById("msg3").innerHTML = "Invalid Password. Password starts with capital letter and ends with one special symbol. password length must be 6-16"
    return false
   }
   
   if(pw<6)
   {
    document.getElementById("msg3").innerHTML = "Password must be greater than 6 characters"
    return false
   }

   if(pw>15)
   {
    document.getElementById("msg3").innerHTML = "Password must be less than 15 characters"
   }

   var cp = document.getElementById("confirmpassword").value
   var cpp = /^[A-Z][a-z0-9]{5,15}[!@#$%^&*]$/
   
   if(cp=="")
   {
    document.getElementById("msg4").innerHTML = "Enter Password"
    return false
   }

   if(cp==pw) 
    true
   else
   {
    document.getElementById("msg4").innerHTML = "OOPS! Incorrect Password"
    return false
   }
}