const main = document.querySelector("main");
const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const formData = {
    fullname: "",
    email: "",
    message: ""
};

const errors = {};

errors.fn = "Full name is missing";
errors.em = "Email is missing";
errors.me = "Message is missing";

function formVal(ev) 
    {ev.preventDefault();

    if (fullname.value == "")
        {if (formData.fullname = fullname.value)
            {delete errors.fn;}
        else
            {errors.fn = "Full name is missing";}
        }

    if (email.value !== "")
        {if (pattern.test(email.value))
                {formData.email = email.value;
                delete errors.em;}
        else
            {errors.em = "Email is invaild";}
        }
        else
            {errors.em = "Email is missing";}

    if (message.value == "")
        {if (formData.message = message.value)
            {delete errors.me;}
        else
            {errors.me = "Message is missing";}
        }
   
    if (Object.keys(errors.length === 0))
        {console.log(formData);}
    else
        {}        
   console.log (formData, errors);
    
    }
    
form.addEventListener("submit", formVal);