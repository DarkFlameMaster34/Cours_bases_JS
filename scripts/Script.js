function StartGame()
{
    let i = 0;

    ShowProposition(propositions_list[i]);

    ShowScore(score, i)

    InitiatePopupForm();
    InitiateButtonEvent(i);


    for(let index = 0; index < choice_radio_button.length; index ++)
        {
            choice_radio_button[index].addEventListener("change", (event) => {
                if(event.target.value == "mots")
                    propositions_list = words_list;
                else
                    propositions_list = sentences_list;
    
                //onsole.log(propositions_list);
                ShowProposition(propositions_list[i]);
    
            })
        }
}

function InitiateButtonEvent(i)
{
    validation_button.addEventListener("click", () => {

        if(player_input.value === propositions_list[i])
            {
                score ++
            }

        i ++;

        ShowScore(score, i)

        if(propositions_list[i] !== undefined)
            ShowProposition(propositions_list[i]);
        else
        {
            ShowProposition("Le jeu est fini !");
            validation_button.disabled = true;
        }

        ClearInputField();
    })
}
function InitiatePopupForm()
{
    submit_form.addEventListener("submit", (event) =>
        {
            event.preventDefault();

            try
            {
                let name_field = document.getElementById("nom");
                let mail_field = document.getElementById("email");

                let name = name_field.value;
                let email = mail_field.value;

                ValidateName(name);
                ValidateMail(email);
                //console.log("Salut je suis " + name + " et j'envoie un mail à : " + email);

                SendErrorMessage("");
                
                SendMail(name, email, score);
            }
            
            catch(error)
            {
                SendErrorMessage(error.message)
            }
        })
}

function ClearInputField()
{
    player_input.value = "";
}

function ShowProposition(current_word)
{
    shown_word.textContent = current_word;
}

function ShowScore(score, list_length)
{
    //console.log("Your final score is : " + score + " sur " + list_length);
    shown_score.textContent = score + " / " + list_length;
}

function SendMail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function ValidateName(name_to_test)
{
    if(name_to_test.length < 2)
        {
            throw new Error(`The name is invalid please use a longer name`);
        }
}

function ValidateMail(mail_to_test)
{
    let regex = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+");

    let result = regex.test(mail_to_test);

    if(!result)
        {
            throw new Error(`The email is invalid please enter a correct email adress`);
        }
}

function SendErrorMessage(error_message)
{
    let popup_div = document.querySelector(".popup");

    let error_message_span = document.getElementById("error_message");


    if(!error_message_span)
        {
            error_message_span = document.createElement("span");
            error_message_span.id = "error_message";
            error_message_span.innerText = error_message;

            popup_div.append(error_message_span);
        }

    error_message_span.innerText = error_message;

}

